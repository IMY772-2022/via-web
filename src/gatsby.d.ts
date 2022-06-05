type GatsbyPageProps<D, P> = import("gatsby").PageProps<D, P>
type HistoryLocation<S> = import("history").Location<S>
type LocationState = import("history").LocationState

interface PageProps<
  S = LocationState,
  DataType = object,
  PageContextType = object
> extends GatsbyPageProps<DataType, PageContextType> {
  location: Window["location"] & HistoryLocation<S>
}
