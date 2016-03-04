"use strict";
exports.createXMLFromObject = (object, options) => {
    if (Object.keys(object).length !== 1) {
        throw new Error('Object must have one the root element.');
    }
    if (typeof Object.keys(object)[0] !== 'string') {
        throw new Error('The root element key must be a string.');
    }
    let rootNodeName = Object.keys(object)[0], rootElement = new TransformObject(rootNodeName, object[rootNodeName], options);
    return rootElement.transform();
};
class TransformObject {
    constructor(name, children, options) {
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
    createNode(node, children, level) {
        let whitespace = this.options.whitespace, returnString = '';
        if (Array.isArray(children)) {
            if (this.options.pretty) {
                returnString = children.map(value => this.createNode(node, value, level)).join(`\n${whitespace.repeat(level)}`);
            }
            else {
                returnString = children.map(value => this.createNode(node, value)).join('');
            }
        }
        else {
            switch (typeof children) {
                case 'object':
                    if (this.options.pretty) {
                        returnString = this.wrapNode(node, `${whitespace.repeat(level)}${this.getObjectNode(children, level + 1)}\n${whitespace.repeat(level)}`);
                    }
                    else {
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
                    returnString = this.wrapNode(node, this.getBooleanNode(children));
                    break;
                default:
                    returnString = this.wrapNode(node, `<!-- ${typeof children} -->`);
            }
            if (this.options.pretty) {
                returnString = `${returnString}`;
            }
        }
        return returnString;
    }
    ;
    getObjectNode(object, level) {
        let whitespace = this.options.whitespace;
        if (isPlainObject(object)) {
            if (this.options.pretty) {
                return `\n${whitespace.repeat(level)}${Object.keys(object).map(node => this.createNode(node, object[node], level)).join(`\n${whitespace.repeat(level)}`)}`;
            }
            return Object.keys(object).map(node => this.createNode(node, object[node], level)).join('');
        }
        else if (Object.getPrototypeOf(object) === Date) {
            if (this.options.formatters.date) {
                return this.options.formatters.date(object);
            }
            return object.toLocaleString();
        }
        else {
            throw new TypeError('Cannot detect an object type: ' + object.toString());
        }
    }
    getStringNode(value) {
        if (this.options.formatters.string) {
            return this.options.formatters.string(value);
        }
        return escapeHtml(value);
    }
    getNumberNode(value) {
        if (this.options.formatters.number) {
            return this.options.formatters.number(value);
        }
        return value.toString(10);
    }
    getBooleanNode(value) {
        if (this.options.formatters.boolean) {
            return this.options.formatters.boolean(value);
        }
        return value.toString();
    }
    wrapNode(name, content) {
        if (content.length > 0) {
            return `<${name}>${content}</${name}>`;
        }
        return `<${name} />`;
    }
}
exports.TransformObject = TransformObject;
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
            case 34:
                escape = '&quot;';
                break;
            case 38:
                escape = '&amp;';
                break;
            case 39:
                escape = '&#39;';
                break;
            case 60:
                escape = '&lt;';
                break;
            case 62:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxleG1sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbXBsZXhtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBbUJhLDJCQUFtQixHQUFHLENBQUMsTUFBZ0IsRUFBRSxPQUF5QjtJQUMzRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxJQUFJLFlBQVksR0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1QyxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVuRixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGO0lBS0ksWUFBWSxJQUFXLEVBQUUsUUFBa0IsRUFBRSxPQUF5QjtRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENB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