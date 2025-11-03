import * as React from 'react';

/**
 * This will configure the tree to show the selected items from the url on initial load
 */
export const useTreeDefaults = ({
  pathname,
  routePrefix,
}: {
  pathname: string;
  routePrefix: string;
}) => {
  const [defaultSelected, setDefaultSelected] = React.useState<string>('');
  const [defaultExpanded, setDefaultExpanded] = React.useState<string[]>([]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    
    setDefaultSelected(pathname);

    const nodesToSelect = pathname
      .replace(routePrefix, '')
      .split('/')
      .reduce(
        (results, node) => {
          if (!node) {
            return results;
          }
          return {
            toSelect: [...results.toSelect, `${results.currentBase}/${node}`],
            currentBase: `${results.currentBase}/${node}`,
          };
        },
        { toSelect: [], currentBase: routePrefix } as {
          toSelect: string[];
          currentBase: string;
        }
      );

    setDefaultExpanded(nodesToSelect.toSelect);
  }, [pathname, routePrefix, mounted]);

  return {
    defaultSelected,
    defaultExpanded,
  };
};
