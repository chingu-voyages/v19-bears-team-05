export function reducer(state, action) {
  switch (action.type) {
    case "set_tags":
      return { ...state, tags: action.tags };
    case "set_search":
      return { ...state, search: action.search };
    default:
      throw new Error();
  }
}
