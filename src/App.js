import React, { useEffect } from "react";
import Home from "./pages/homepage/home";
import Navigation from "./components/navigation/navigation";
import Shop from "./pages/shop/shop";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/signin/singin";
import { connect } from "react-redux";
import CheckOut from "./pages/checkout/checkout";
import { currentUserSelector } from "./redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./pages/collectionpage/collection.page";
import { checkUserSession } from "./redux/user/user-actions";

function App({currentUser, checkUserSession}) {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:collectionID" element={<CollectionPage />} />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" replace /> : <Signin />}
        />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
