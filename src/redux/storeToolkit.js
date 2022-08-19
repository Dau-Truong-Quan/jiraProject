import { configureStore } from "@reduxjs/toolkit";
import { productListSlide } from "./productLists/productListSlide";

import demoSlice from "./demoSlice";
import { HistoryRedux } from "./history/HistoryRedux";
export const storeToolkit = configureStore({
  reducer: {
    productListSlide,
    demoSlice,
    HistoryRedux,
  },
});
