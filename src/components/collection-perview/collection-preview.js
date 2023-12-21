import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/collection/collection-selector";
import Collection from '../collection/collection'

function CollectionPreview({ items }) {
  return (
    <div>
      {items.map((element) => (
        <Collection
          key={element.id}
          title={element.title}
          items={element.items}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionPreview);
