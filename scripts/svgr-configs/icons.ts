import { ComponentOutputterParamOption } from '@figma-export/types';
import { Config } from '@svgr/core';
import { SVGR_COMPONENT_OUT_PUT_PATH } from '../utils/figma.constants';
import {
  getDirName,
  getExportTemplate,
  getFileDescriptor,
  getVarNameByFileDC,
} from '../utils/figma.utils';
import { Config as OptimizeOptions } from 'svgo';
import SvgrTemplate from './svgr-template';
import * as FigmaExport from '@figma-export/types';
import { pascalCase } from '@figma-export/utils';

interface Options {
  output: string;
  getDirname?: (options: ComponentOutputterParamOption) => string;
  getComponentName?: (options: ComponentOutputterParamOption) => string;
  getComponentFilename?: (options: ComponentOutputterParamOption) => string;
  getFileExtension?: (options: ComponentOutputterParamOption) => string;
  getExportTemplate?: (options: ComponentOutputterParamOption) => string;
  /**
   * SVGR ships with a handful of customizable options, usable in both the CLI and API.
   * https://react-svgr.com/docs/options/
   */
  getSvgrConfig?: (options: ComponentOutputterParamOption) => Config;
}

export const getIconComponentName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const fileDescriptor = getFileDescriptor(options);
  const variableName = getVarNameByFileDC(fileDescriptor);
  return `${pascalCase(variableName)}Icon`;
};

export const IconSvgReactOutPutConfig: Options = {
  output: SVGR_COMPONENT_OUT_PUT_PATH,
  getDirname: getDirName,
  getFileExtension: () => {
    return '.tsx';
  },
  getComponentName: getIconComponentName,
  getComponentFilename: getIconComponentName,
  getExportTemplate: (options) => {
    const reactComponentName = getIconComponentName(options);
    const reactComponentFilename = getIconComponentName(options);
    return getExportTemplate({ reactComponentFilename, reactComponentName });
  },
  getSvgrConfig: (options) => {
    const shouldCleanFills =
      options.pageName.toLowerCase().includes('system') ||
      options.pageName.toLowerCase().includes('illustrative');
    const svgoConfig: OptimizeOptions = {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        'removeComments',
        'removeUselessStrokeAndFill',
      ],
    };
    if (shouldCleanFills) {
      svgoConfig.plugins?.push({
        name: 'removeAttrs',
        params: {
          attrs: 'fill',
        },
      });
    }
    return {
      ref: true,
      svgProps: {
        role: 'img',
      },
      typescript: true,
      svgo: true,
      icon: true,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
      svgoConfig,

      dimensions: false,
      template: SvgrTemplate,
    };
  },
};
