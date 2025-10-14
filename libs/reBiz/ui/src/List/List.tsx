import React from 'react';

import { Icon, IconsList } from '@ruyyaan/shared/ui-icons';
import {
  Autocomplete,
  Avatar,
  Box,
  type ButtonOwnProps,
  Chip,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List as MuiList,
  TextField,
} from '@mui/material';

import { Buttons, Layout, Loading } from '@ruyyaan/shared/ui';

import { TextLarge, TextMedium, TextRegular, TextSmall } from '../Typography';

import { Item, ListProps } from './types';

const LoadingIndicator: React.FC = () => (
  <Layout.BoxCenter>
    <Layout.BoxAbsolute>
      <Loading />
    </Layout.BoxAbsolute>
  </Layout.BoxCenter>
);

const ItemList: React.FC<{
  items: Item[];
  onDelete: (id: string) => void;
  defaultIcon?: IconsList;
}> = ({ items, onDelete, defaultIcon }) => (
  <MuiList>
    {items.map((item) => (
      <React.Fragment key={item.id}>
        <ListItem
          sx={{ paddingLeft: 0 }}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(item.id)}>
              <Icon iconName={IconsList.close} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar src={item.image || undefined} alt={item.name}>
              {!item.image && defaultIcon && <Icon iconName={defaultIcon} />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.detail} />
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
  </MuiList>
);

const AddItem: React.FC<{
  availableOptions: Item[];
  selectedItems: Item[];
  setSelectedItems: React.Dispatch<React.SetStateAction<Item[]>>;
  handleAdd: () => void;
  handleCancel: () => void;
  namePlaceholder: string;
  optionsLoading: boolean;
  limitTags?: number;
  defaultIcon?: IconsList;
}> = ({
  availableOptions,
  selectedItems,
  setSelectedItems,
  handleAdd,
  handleCancel,
  namePlaceholder,
  optionsLoading,
  limitTags = 3,
  defaultIcon,
}) => (
  <Layout.BoxVertical sx={{ gap: 1 }}>
    <Layout.BoxHorizontal sx={{ gap: 1 }}>
      <Autocomplete
        multiple
        disableCloseOnSelect
        fullWidth
        limitTags={limitTags}
        options={availableOptions}
        value={selectedItems}
        getOptionLabel={(option) => `${option.name} - ${option.detail}`}
        isOptionEqualToValue={(option, value) => option.id === value?.id}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.id + option.name}>
            <Layout.BoxHorizontal sx={{ width: '100%' }}>
              <Box
                component={() => <Icon iconName={IconsList.taskAlt} />}
                sx={{
                  width: 17,
                  alignSelf: 'center',
                }}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
              <Avatar src={option.image || undefined} alt={option.name}>
                {!option.image && <Icon iconName={defaultIcon || IconsList.user} />}
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <TextRegular variant="normal">{option.name}</TextRegular>
                <TextMedium variant="muted">{option.title}</TextMedium>
                <TextSmall variant="muted">{option.detail}</TextSmall>
              </Box>
              <Box
                component={() => <Icon iconName={IconsList.close} />}
                sx={{
                  opacity: 0.6,
                  width: 17,
                  alignSelf: 'center',
                }}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
            </Layout.BoxHorizontal>
          </li>
        )}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip {...getTagProps({ index })} key={option.id} label={option.name} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={namePlaceholder}
            variant="outlined"
            sx={{ '& .MuiInputBase-root': { padding: '3px 8px' } }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {optionsLoading && <Loading color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        onChange={(_event, value) => setSelectedItems(value)}
      />
      <Box sx={{ maxHeight: '50px' }}>
        <Buttons.PrimaryButton onClick={handleAdd} text="Add" />
      </Box>
      <Box sx={{ maxHeight: '50px' }}>
        <Buttons.SecondaryButton onClick={handleCancel} text="Cancel" />
      </Box>
    </Layout.BoxHorizontal>
  </Layout.BoxVertical>
);

const AddButton: React.FC<{
  title: string;
  color?: ButtonOwnProps['color'];
  onClick: () => void;
}> = ({ title, color, onClick }) => (
  <Buttons.TertiaryButton
    startIcon={<Icon iconName={IconsList.addCircleOutlineIcon} />}
    onClick={onClick}
    text={`Add new ${title.toLowerCase()}`}
    color={color}
  />
);

export const List: React.FC<ListProps> = ({
  title,
  items,
  onAdd,
  onDelete,
  loading,
  noDataMessage,
  namePlaceholder,
  limitTags = 3,
  availableOptions,
  fetchAvailableOptions,
  defaultIcon,
}) => {
  const [selectedItems, setSelectedItems] = React.useState<Item[]>(items);
  const [isAdding, setIsAdding] = React.useState(false);
  const [optionsLoading, setOptionsLoading] = React.useState(false);

  const handleAdd = () => {
    if (selectedItems.length > 0) {
      onAdd(selectedItems);
      setIsAdding(false);
    }
  };

  const handleStartAdding = async () => {
    setIsAdding(true);
    setOptionsLoading(true);
    await fetchAvailableOptions();
    setOptionsLoading(false);
  };

  const handleCancel = () => setIsAdding(false);

  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
    onDelete(id);
  };

  return (
    <Layout.BoxVertical spacing="none">
      <TextLarge>{title}</TextLarge>
      {items.length === 0 && !loading ? (
        <Layout.BoxCenter>
          <Layout.BoxVertical sx={{ padding: '10px 0' }}>
            <TextRegular>
              {noDataMessage}{' '}
              <AddButton color="secondary" title={title} onClick={handleStartAdding} />
            </TextRegular>
          </Layout.BoxVertical>
        </Layout.BoxCenter>
      ) : (
        <Layout.BoxRelative>
          {loading && <LoadingIndicator />}
          <ItemList items={items} onDelete={handleDelete} defaultIcon={defaultIcon} />
        </Layout.BoxRelative>
      )}
      <Layout.BoxVertical sx={{ alignSelf: isAdding ? 'normal' : 'flex-start' }}>
        {isAdding ? (
          <AddItem
            availableOptions={availableOptions}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleAdd={handleAdd}
            handleCancel={handleCancel}
            namePlaceholder={namePlaceholder}
            optionsLoading={optionsLoading}
            limitTags={limitTags}
            defaultIcon={defaultIcon}
          />
        ) : (
          items.length > 0 && (
            <AddButton color="primary" onClick={handleStartAdding} title={title} />
          )
        )}
      </Layout.BoxVertical>
    </Layout.BoxVertical>
  );
};

export default List;
