# @uniiem/zws

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/HoshinoSuzumi/zero-width-steganography/ci.yml)
![NPM Downloads](https://img.shields.io/npm/dm/%40uniiem%2Fzws)
![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40uniiem%2Fzws/latest)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40uniiem%2Fzws)
![GitHub License](https://img.shields.io/github/license/HoshinoSuzumi/zero-width-steganography)

A simple library for zero-width steganography.

## Installation

```bash
npm install @uniiem/zws
```

## Usage

```typescript
import {
  encodeText,
  decodeText,
  encodeBinary,
  decodeBinary,
  setCharSet
} from '@uniiem/zws';
```

## API

```typescript
declare const setCharSet: (newChars: ZWSCharSet) => void;
declare const encodeText: (text1: string, text2: string) => string;
declare const encodeBinary: (text: string, data: Uint8Array) => string;
declare const decodeText: (text: string) => ZWSDecoded<string>;
declare const decodeBinary: (text: string) => ZWSDecoded<Uint8Array>;
declare const ZW_CHARACTERS: readonly ZWSCharacter[];
```

## Sponsor

Buy me a coffee~

[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3D5ANK41%26type%3Dpledges&style=flat)](https://patreon.com/5ANK41)
[![爱发电](https://afdian.moeci.com/11/badge.svg)](https://afdian.net/a/hoshino_suzumi)
