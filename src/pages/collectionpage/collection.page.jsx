import { useEffect } from "react";
import "./collectionpage.css";

// import { fetchCollectionsStartAsync } from "../../redux/collection/collection.action";

import { selectIsCollectionLoaded } from "../../redux/collection/collection-selector";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Collection from "./collection.component";
import WithSpinner from "../../components/witth-spinner/with-spanner.component";
import { fetchCollectionsStart } from "../../redux/collection/collection.action";

const CollectionWithSpinner = WithSpinner(Collection);

function CollectionPage({ fetchCollectionsStart, isCollectionLoaded }) {
  console.log("collection page is rendered");

  useEffect(() => {
    !isCollectionLoaded && fetchCollectionsStart();
  }, []);

  return <CollectionWithSpinner isLoading={!isCollectionLoaded} />;
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);


