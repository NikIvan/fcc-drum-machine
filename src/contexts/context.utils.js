import React from 'react';

/**
 * 
 * @param {React.Context} context 
 * @param {String} contextName 
 */
export function getUseContext(context, contextName) {
  return function() {
    const ctx = React.useContext(context);

    if (ctx === undefined) {
      throw new Error(`${contextName} 'undefined'. Check context Provider`);
    }

    return ctx;
  }
}
