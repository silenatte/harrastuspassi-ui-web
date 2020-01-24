import { useMemo, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector as useReactReduxSelector } from 'react-redux';

import isEqual from 'lodash.isequal';

export function useSelector(selector) {
  return useReactReduxSelector(state => selector(state));
}

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions
          .map(a => bindActionCreators(a, dispatch))
          .reduce((a, b) => {
            return { ...a, ...b };
          });
      }
      return bindActionCreators(actions, dispatch);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : deps
  );
}

function deepCompareEquals(a, b) {
  return isEqual(a, b);
}

export function useDeepCompareMemoize(value) {
  const ref = useRef();
  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function usePositiveEffect(callback, dependencies) {
  if (dependencies.includes(undefined)) callback = e => e;
  useDeepCompareEffect(callback, dependencies);
}

export function useDeepCompareEffect(callback, dependencies) {
  useEffect(callback, useDeepCompareMemoize(dependencies));
}
