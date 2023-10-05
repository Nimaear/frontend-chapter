import React from 'react';
import vm from 'node:vm';

const REACT = 'https://esm.sh/react';
const REACT_DOM = 'https://esm.sh/react-dom';

const loadFromUrl = async (url: string): Promise<string> => {
  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    throw new Error(`Cannot load module from URL ${url}`);
  }
  const res = await fetch(url, { redirect: 'follow' });
  return res.text();
};

async function linker(specifier: string, referencingModule: vm.Module) {
  if (specifier === 'react') {
    // const reactSource = await loadFromUrl(REACT);
    const syntheticModule = new vm.SyntheticModule(['default', 'useState', 'useCallback'], function () {
      this.setExport('default', React);
      this.setExport('useState', React.useState);
      this.setExport('useCallback', React.useCallback);
    });
    return syntheticModule;
  }
  if (specifier === 'react-dom') {
    return loadModule(REACT_DOM);
  }
  if (specifier.startsWith('https://') || specifier.startsWith('http://')) {
    return loadModule(specifier);
  }
  throw new Error(`Unable to resolve dependency: ${specifier}`);
}

const loadModule = async (url: string): Promise<vm.Module> => {
  const source = await loadFromUrl(url);
  const script = new vm.SourceTextModule(source, vm.createContext({ React }));
  await script.link(linker);
  await script.evaluate();
  return script;
};

export const Import = async (url: string) => {
  const vmModule = await loadModule(url);
  return vmModule.namespace;
};
