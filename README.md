# tamagui-multiple-select

> My quick take on multiple select component for Tamagui.

## Installation

```
yarn add tamagui-multiple-select
```

## Usage

```
import { Select, SelectProps } from 'tamagui-multiple-select'
```

Same props as [Tamagui Select](https://tamagui.dev/docs/components/select/1.0.0) component, except `value` is an array of selected values and `onValueChange` is a function that takes an array of selected values.

## Compatibility

This component is only compatible with Tamagui `1.15.13` due to version mismatch issue. You can clone the repo and replace the tamagui versions in package.json with the one you are using. I'll try to fix it in the future.
