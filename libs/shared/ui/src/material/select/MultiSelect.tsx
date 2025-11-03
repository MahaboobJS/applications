
import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const InputWrapper = styled('div')({
  border: '1px solid #d9d9d9',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '1px',
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: '40px',
  '&:hover': {
    borderColor: '#40a9ff',
  },
});

const MultiselectBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '24px',
  backgroundColor: '#fafafa',
  border: '1px solid #e8e8e8',
  borderRadius: '2px',
  boxSizing: 'content-box',
  padding: '0 4px 0 10px',
  outline: '0',
  overflow: 'hidden',
  '&:focus': {
    borderColor: '#40a9ff',
    backgroundColor: '#e6f7ff',
  },
  '& span': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  '& svg': {
    fontSize: '12px',
    cursor: 'pointer',
    padding: '4px',
  },
});

const Listbox = styled('ul')({
  margin: '2px 0 0',
  padding: '0',
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#fff',
  overflow: 'auto',
  maxHeight: '250px',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: '1',
  '& li': {
    padding: '5px 12px',
    display: 'flex',
    '& span': {
      flexGrow: '1',
    },
    '& svg': {
      color: 'transparent',
    },
  },
  '& li[aria-selected="true"]': {
    backgroundColor: '#fafafa',
    fontWeight: '600',
    '& svg': {
      color: '#1890ff',
    },
  },
});

export type MultiSelectOption<OptionValue> = {
  id: string;
  value: OptionValue;
  name: string;
};

type ChangeType = 'add' | 'remove';
type MultiSelectProps<OptionValue> = {
  selectedValues: MultiSelectOption<OptionValue>[];
  options: MultiSelectOption<OptionValue>[];
  onChange: (type: ChangeType, newValues: string) => Promise<boolean>;
  renderElement?: (option: MultiSelectOption<OptionValue>) => React.ReactElement;
  renderSelectedElement?: (option: MultiSelectOption<OptionValue>) => React.ReactElement;
};

function MultiSelect<OptionValue extends string | number>({
  selectedValues,
  options,
  onChange,
  renderElement,
  renderSelectedElement,
}: Readonly<MultiSelectProps<OptionValue>>) {
  const [isOpenList, setIsOpenList] = React.useState(false);

  const handleRemove = (option: MultiSelectOption<OptionValue>) => () => {
    setIsOpenList(false);
    onChange('remove', option.id);
  };

  const handleAdd = (option: MultiSelectOption<OptionValue>) => () => {
    setIsOpenList(false);
    onChange('add', option.id);
  };

  const handleListClick: React.EventHandler<React.MouseEvent<HTMLDivElement>> = (event) => {
    // detect if the click was on the parent, or an element
    // if an element, that means we should not close/open the list
    // as we need to instead delete the clicked item
    if (event.target instanceof HTMLDivElement) {
      setIsOpenList(!isOpenList);
    }
  };

  const optionGroups = React.useMemo(() => {
    return options.reduce(
      (results, option) => {
        const isSelected = selectedValues.some((selectedOption) => selectedOption.id === option.id);
        if (isSelected) {
          results.selected.push(option);
        } else {
          results.available.push(option);
        }
        return results;
      },
      {
        available: [] as MultiSelectOption<OptionValue>[],
        selected: [] as MultiSelectOption<OptionValue>[],
      }
    );
  }, [selectedValues, options]);

  return (
    <>
      <InputWrapper onClick={handleListClick}>
        {optionGroups.selected.map((option) => (
          <MultiselectBox key={`list-${  option.id}`}>
            {renderSelectedElement ? (
              renderSelectedElement(option)
            ) : (
              <span style={styles.pointer} role="listitem" aria-label={option.name}>
                {option.name}
              </span>
            )}
            <CloseIcon style={styles.cursor} onClick={handleRemove(option)} />
          </MultiselectBox>
        ))}
      </InputWrapper>

      <Listbox style={{ display: isOpenList ? 'block' : 'none' }}>
        {optionGroups.available.map((option) => (
          <Box key={option.id} onClick={handleAdd(option)} aria-selected={true}>
            {renderElement ? (
              renderElement(option)
            ) : (
              <span role="listitem" aria-label={option.name}>
                {option.name}
              </span>
            )}
          </Box>
        ))}
      </Listbox>
    </>
  );
}

const styles = {
  cursor: { cursor: 'pointer' },
  pointer: { cursor: 'default' },
};

export { MultiSelect };
