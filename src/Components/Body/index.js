import React, { useEffect, useState, useCallback } from "react";
import * as actions from "../../actionTypes";
import { useDataLayerValue } from "../../DataLayer";
import BodyHeader from "../BodyHeader";
import TracksContainer from "../TracksContainer";
import "./body.css";

function Body() {
  const [{ recentTracks, spotify, categories }, dispatch] = useDataLayerValue();
  const [cat1, setCat1] = useState({});
  const [cat2, setCat2] = useState({});
  const [cat3, setCat3] = useState({});
  const [cat4, setCat4] = useState({});
  const [cat5, setCat5] = useState({});

  const initialize = () => {
    if (!categories) {
      dispatch({ type: actions.LOADER_TRUE });
      spotify.getCategories({ country: "IN" }).then((categories) => {
        dispatch({
          type: actions.SET_CATEGORIES,
          payload: categories.categories,
        });
        dispatch({ type: actions.LOADER_FALSE });
      });
    }
  };

  useEffect(initialize, []);

  const getCategoryPlaylists = useCallback(
    (playlist) => {
      return new Promise((resolve) => {
        dispatch({ type: actions.LOADER_TRUE });
        spotify.getCategoryPlaylists(playlist.id).then((item) => {
          dispatch({ type: actions.LOADER_FALSE });
          resolve({ name: playlist.name, item });
        });
      });
    },
    [dispatch, spotify]
  );

  useEffect(() => {
    if (categories?.items && categories.items.length > 0) {
      let { items } = categories;
      getCategoryPlaylists(
        items.splice(getRandomInt(0, items.length - 1), 1)[0]
      ).then((item) => setCat1(item));
      getCategoryPlaylists(
        items.splice(getRandomInt(0, items.length - 1), 1)[0]
      ).then((item) => setCat2(item));
      getCategoryPlaylists(
        items.splice(getRandomInt(0, items.length - 1), 1)[0]
      ).then((item) => setCat3(item));
      getCategoryPlaylists(
        items.splice(getRandomInt(0, items.length - 1), 1)[0]
      ).then((item) => setCat4(item));
      getCategoryPlaylists(
        items.splice(getRandomInt(0, items.length - 1), 1)[0]
      ).then((item) => setCat5(item));
    }
    return () => {};
  }, [categories, getCategoryPlaylists, dispatch]);

  const getRandomInt = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
  };

  return (
    <div className="body">
      <BodyHeader />
      <TracksContainer
        tracks={recentTracks}
        name={"Recently Played"}
        type={0}
      />

      <TracksContainer
        tracks={cat1?.item?.playlists}
        name={cat1.name}
        type={1}
      />
      <TracksContainer
        tracks={cat2?.item?.playlists}
        name={cat2.name}
        type={1}
      />
      <TracksContainer
        tracks={cat3?.item?.playlists}
        name={cat3.name}
        type={1}
      />
      <TracksContainer
        tracks={cat4?.item?.playlists}
        name={cat4.name}
        type={1}
      />
      <TracksContainer
        tracks={cat5?.item?.playlists}
        name={cat5.name}
        type={1}
      />
    </div>
  );
}

export default Body;
