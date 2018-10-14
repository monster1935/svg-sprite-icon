/**
 * svgo-loader的配置文件
 * 更多配置详情请见：https://github.com/svg/svgo
 */

'use strict'

module.exports = {
  plugins: [
    { cleanupAttrs: true },
    { cleanupEnableBackground: true },
    { cleanupIDs: true },
    { cleanupListOfValues: true },
    { cleanupNumericValues: true },
    { collapseGroups: true },
    { convertColors: true },
    { convertPathData: true },
    { convertShapeToPath: true },
    { convertStyleToAttrs: true },
    { convertTransform: true },
    { mergePaths: true },
    { removeComments: true },
    { removeDesc: true },
    { removeDimensions: true },
    { removeDoctype: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeEmptyContainers: true },
    { removeEmptyText: true },
    { removeHiddenElems: true },
    { removeMetadata: true },
    { removeNonInheritableGroupAttrs: true },
    { removeRasterImages: true },
    { removeTitle: true },
    { removeUnknownsAndDefaults: true },
    { removeUselessDefs: true },
    { removeUnusedNS: true },
    { removeUselessStrokeAndFill: true },
    {
      removeAttrs: { attrs: 'fill'}
    },
    { removeXMLProcInst: true },
    { removeStyleElement: true },
    { removeUnknownsAndDefaults: true},
    { sortAttrs: true }
  ]
}