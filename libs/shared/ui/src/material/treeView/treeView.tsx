import * as React from 'react';

import type { SxProps } from '@mui/material';
import { SimpleTreeView as MaterialTreeView } from '@mui/x-tree-view';

// Custom TreeItem component for SimpleTreeView
const TreeItem = ({ children, itemId, label, onClick, className, sx, ...props }: any) => {
  return (
    <MaterialTreeView.Item
      itemId={itemId}
      label={label}
      onClick={onClick}
      className={className}
      sx={sx}
      {...props}
    >
      {children}
    </MaterialTreeView.Item>
  );
};

type TreeData = {
  id: string;
  name: string;
  route?: string;

  children?: readonly TreeData[];
};

const renderTree = (
  nodes: TreeData,
  { routePrefix, onNavigate }: { routePrefix?: string; onNavigate: (route: string) => void }
): React.JSX.Element => {
  if (nodes.id === 'root' && Array.isArray(nodes.children))
    return <>{nodes.children.map((node) => renderTree(node, { routePrefix, onNavigate }))}</>;

  // used to be: if (nodes.route)
  if (nodes.id) {
    return (
      <TreeItem
        key={`${routePrefix}/${nodes.id}`}
        itemId={`${routePrefix}/${nodes.id}`}
        label={nodes.name}
        onClick={() => onNavigate(`${routePrefix}/${nodes.id}`)}
        className="leaf"
        sx={{
          padding: '8px 12px 8px 0px',
        }}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) =>
              renderTree(node, {
                routePrefix: `${routePrefix}/${nodes.id}`,
                onNavigate,
              })
            )
          : null}
      </TreeItem>
    );
  }

  // not used, as we render links on all nodes at the moment
  return (
    <TreeItem key={nodes.id} itemId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) =>
            renderTree(node, {
              routePrefix: `${routePrefix}/${nodes.route}`,
              onNavigate,
            })
          )
        : null}
    </TreeItem>
  );
};

type Props = {
  data: TreeData;
  routePrefix?: string;
  sx?: SxProps;
  onNavigate: (route: string) => void;
  defaultExpanded?: string[];
  defaultSelected?: string;
};
export const TreeView: React.FC<Props> = ({
  sx,
  data,
  routePrefix,
  onNavigate,
  defaultExpanded,
  defaultSelected,
}) => {
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <MaterialTreeView
        aria-label="navigator"
        sx={{ overflowY: 'auto', ...sx }}
      >
        {renderTree(data, { routePrefix, onNavigate })}
      </MaterialTreeView>
    );
  }

  return (
    <MaterialTreeView
      aria-label="navigator"
      defaultSelectedItems={defaultSelected ? [defaultSelected] : []}
      defaultExpandedItems={defaultExpanded || []}
      sx={{ overflowY: 'auto', ...sx }}
    >
      {renderTree(data, { routePrefix, onNavigate })}
    </MaterialTreeView>
  );
};
