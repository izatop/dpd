interface AnyObject {
    [root:string]:any;
}

interface TransformFormatter<T> {
    (value:T):string;
}

interface TransformOptions {
    pretty?:boolean;
    whitespace?:string;
    formatters?: {
        string?:TransformFormatter<string>;
        number?:TransformFormatter<number>;
        date?:TransformFormatter<Date>;
        boolean?:TransformFormatter<boolean>;
    }
}

export const createXMLFromObject = (object:AnyObject, options?:TransformOptions) => {
    if (Object.keys(object).length !== 1) {
        throw new Error('Object must have one the root element.')
    }

    if (typeof Object.keys(object)[0] !== 'string') {
        throw new Error('The root element key must be a string.');
    }

    let rootNodeName:string = Object.keys(object)[0],
        rootElement = new TransformObject(rootNodeName, object[rootNodeName], options);

    return rootElement.transform();
};

export class TransformObject {
    name:string;
    children:AnyObject;
    options:TransformOptions;

    constructor(name:string, children:AnyObject, options?:TransformOptions) {
        this.name = name;
        this.children = children;
        this.options = options || {};
        if (false === this.options.hasOwnProperty('formatters')) {
            this.options.formatters = {};
        }

        if (false === this.options.hasOwnProperty('pretty')) {
            this.options.pretty = false;
        }

        if (false === this.options.hasOwnProperty('whitespace')) {
            this.options.whitespace = "  ";
        }
    }

    transform() {
        return this.createNode(this.name, this.children, 0);
    }

    createNode(node:string, children:any, level?:number):string {
        let whitespace = this.options.whitespace,
            returnString = '';
        if (Array.isArray(children)) {
            if (this.options.pretty) {
                returnString = children.map(value => this.createNode(node, value, level)).join(`\n${whitespace.repeat(level)}`);
            } else {
                returnString = children.map(value => this.createNode(node, value)).join('');
            }
        } else {
            switch (typeof children) {
                case 'object':
                    if (this.options.pretty) {
                        returnString = this.wrapNode(node, `${whitespace.repeat(level)}${this.getObjectNode(children, level + 1)}\n${whitespace.repeat(level)}`);
                    } else {
                        returnString = this.wrapNode(node, this.getObjectNode(children));
                    }
                    break;
                case 'string':
                    returnString = this.wrapNode(node, this.getStringNode(children));
                    break;
                case 'number':
                    returnString = this.wrapNode(node, this.getNumberNode(children));
                    break;
                case 'boolean':
                    returnString= this.wrapNode(node, this.getBooleanNode(children));
                    break;
                default:
                    returnString = this.wrapNode(node, `<!-- ${typeof children} -->`);
            }

            if (this.options.pretty) {
                returnString = `${returnString}`;
            }
        }

        return returnString;
    };

    getObjectNode(object:any, level?:number):string {
        let whitespace = this.options.whitespace;
        if (isPlainObject(object)) {
            if (this.options.pretty) {
                return `\n${whitespace.repeat(level)}${Object.keys(object).map(node => this.createNode(node, object[node], level)).join(`\n${whitespace.repeat(level)}`)}`;
            }

            return Object.keys(object).map(node => this.createNode(node, object[node], level)).join('');
        } else if (Object.getPrototypeOf(object) === Date) {
            if (this.options.formatters.date) {
                return this.options.formatters.date(object);
            }
            return object.toLocaleString();
        } else {
            throw new TypeError('Cannot detect an object type: ' + object.toString());
        }
    }

    getStringNode(value:string):string {
        if (this.options.formatters.string) {
            return this.options.formatters.string(value);
        }

        return escapeHtml(value);
    }

    getNumberNode(value:number):string {
        if (this.options.formatters.number) {
            return this.options.formatters.number(value);
        }

        return value.toString(10);
    }

    getBooleanNode(value:boolean):string {
        if (this.options.formatters.boolean) {
            return this.options.formatters.boolean(value);
        }

        return value.toString();
    }

    wrapNode(name:string, content:string) {
        if (content.length > 0) {
            return `<${name}>${content}</${name}>`;
        }

        return `<${name} />`;
    }
}

const isPlainObject = (obj) => {
    // Basic check for Type object that's not null
    if (typeof obj == 'object' && obj !== null) {
        // If Object.getPrototypeOf supported, use it
        if (typeof Object.getPrototypeOf == 'function') {
            var proto = Object.getPrototypeOf(obj);
            return proto === Object.prototype || proto === null;
        }

        // Otherwise, use internal class
        // This should be reliable as if getPrototypeOf not supported, is pre-ES5
        return Object.prototype.toString.call(obj) == '[object Object]';
    }

    // Not an object
    return false;
};

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

'use strict';

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);

    if (!match) {
        return str;
    }

    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escape = '&quot;';
                break;
            case 38: // &
                escape = '&amp;';
                break;
            case 39: // '
                escape = '&#39;';
                break;
            case 60: // <
                escape = '&lt;';
                break;
            case 62: // >
                escape = '&gt;';
                break;
            default:
                continue;
        }

        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
    }

    return lastIndex !== index
        ? html + str.substring(lastIndex, index)
        : html;
}