
import { createSelector } from 'reselect';

const selectShop = state => state.collection;

export const selectCollections = createSelector(
    [selectShop],
    collection => collection.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
)

export const selectCollectionItems = createSelector(
    [selectCollections],
    collections => collections ? collections : null 
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    collection => collection.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    collection => !!collection.collections
)