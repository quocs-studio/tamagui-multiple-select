import React from 'react';
import { ScopedProps, SelectContextValue } from './types';
export declare const createSelectContext: <ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType | undefined) => readonly [{
    (props: ContextValueType & {
        scope: import("@tamagui/create-context").Scope<ContextValueType>;
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, (consumerName: string, scope: import("@tamagui/create-context").Scope<ContextValueType | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<ContextValueType> | undefined;
} | undefined) => ContextValueType], createSelectScope: import("@tamagui/create-context").CreateScope;
export declare const SelectProvider: {
    (props: SelectContextValue & {
        scope: import("@tamagui/create-context").Scope<SelectContextValue>;
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, useSelectContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<SelectContextValue | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<SelectContextValue> | undefined;
} | undefined) => SelectContextValue;
export declare const ForwardSelectContext: (props: ScopedProps<{
    children?: any;
    context: SelectContextValue;
}>) => JSX.Element;
//# sourceMappingURL=context.d.ts.map