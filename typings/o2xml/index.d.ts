declare module "o2xml" {
    interface AnyObject {
        [root: string]: any;
    }
    interface TransformFormatter<T> {
        (value: T): string;
    }
    interface TransformOptions {
        pretty?: boolean;
        indent?: string;
        declaration?: boolean;
        formatters?: {
            string?: TransformFormatter<string>;
            number?: TransformFormatter<number>;
            date?: TransformFormatter<Date>;
            boolean?: TransformFormatter<boolean>;
        };
    }

    const transform: (object: AnyObject, options?: TransformOptions) => string;
    class TransformObject {
        name: string;
        children: any;
        options: TransformOptions;
        constructor(name: string, children: any, options?: TransformOptions);
        transform(): string;
        private createNode(node, children?, level?);
        private getObjectNode(object, level?);
        private getObjectAttributes(object);
        private getStringNode(value);
        private getNumberNode(value);
        private getBooleanNode(value);
        private wrapNode(level, name, content?, attributes?);
    }

    export { AnyObject, TransformFormatter, TransformOptions, TransformObject, transform };
}