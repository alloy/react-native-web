import * as css from './css';
import flattenStyle from '../../modules/flattenStyle';
import React from 'react';
import ReactNativePropRegistry from '../../modules/ReactNativePropRegistry';

import jss from 'jss';
import preset from 'jss-preset-default';

// I'm assuming this only needs to be setup once per app, not per file
let jssSetup = false;

if (!jssSetup) {
  jss.setup(preset());
  jssSetup = true;
}

let styleElement;

const STYLE_SHEET_ID = 'react-native-style__';

const absoluteFillObject = { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 };

const defaultStyleSheet = css.getDefaultStyleSheet();

const resolveStyle = (style) => {
  if (typeof style === 'string') {
    return style; // className generated by `jss.createStyleSheet(styles).attach()`
  } else if (Array.isArray(style)) {
    return style.map((s, i) => {
      const rs = resolveStyle(s);
      return rs && i > 0 ? ` ${rs}` : rs;
    }).join('');
  } else if (typeof style === 'object') {
    const className = 'generated-class';
    const styles = {
      [className]: style // inline style object NOT from `StyleSheet.create()`
    };

    const jssObj = jss.createStyleSheet(styles).attach(); // append generated selector+style to the DOM

    return jssObj.classes[className];
  } else {
    return '';
  }
};

module.exports = {
  /**
   * For testing
   * @private
   */
  _reset() {
    if (styleElement) {
      document.head.removeChild(styleElement);
      styleElement = null;
    }
  },

  absoluteFill: ReactNativePropRegistry.register(absoluteFillObject),

  absoluteFillObject,

  create(styles) {
    const sheet = jss.createStyleSheet(styles).attach(); // goodies!
    return sheet.classes;
  },

  hairlineWidth: 1,

  flatten: flattenStyle,

  /* @platform web */
  render() {
    return <style dangerouslySetInnerHTML={{ __html: defaultStyleSheet }} id={STYLE_SHEET_ID} />;
  },

  /**
   * Accepts React props and converts style declarations to classNames when necessary
   * @platform web
   */
  resolve(props) {
    let className = props.className || '';
    className += resolveStyle(props.style);
    return { className }; // note: we'll deal with display and pointer events `styleAsClassName` if we go this route
  }
};
