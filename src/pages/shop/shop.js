import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import CollectionPreview from "../../components/collection-perview/collection-preview";
import { selectIsCollectionFetching } from "../../redux/collection/collection-selector";
import { selectIsCollectionLoaded } from "../../redux/collection/collection-selector";

import WithSpinner from "../../components/witth-spinner/with-spanner.component";
import { fetchCollectionsStart } from "../../redux/collection/collection.action";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);

const Shop = () => {
  
  const dispatch = useDispatch();
  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const isCollectionLoaded = useSelector(selectIsCollectionLoaded)
  
  console.log("shop page is rendered");

  useEffect(() => {
    !isCollectionLoaded && dispatch(fetchCollectionsStart())
  }, [dispatch, isCollectionLoaded])
  

  return <CollectionPreviewWithSpinner isLoading={isCollectionFetching} />;
};


export default Shop;