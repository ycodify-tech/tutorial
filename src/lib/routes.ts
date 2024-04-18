export const routes = {
  home: "/",
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  validateEmail: "/validate-email",
  stores: {
    index: "/stores",
    store: (storeSlug: string) => `/stores/${storeSlug}`,
  },
  cinema: {
    index: "/cinema",
    movie: (movieSlug: string) => `/cinema/${movieSlug}`,
  },
  parking: {
    index: "/parking",
  },
  wallet: {
    index: "/wallet",
    coupons: {
      index: "/wallet/coupons",
      coupon: (couponId: string) => `/wallet/coupons/${couponId}`,
    },
    addPoints: "/wallet/add-points",
  },
};
