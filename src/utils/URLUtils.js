import 'query-string'
class URLUtils {
  export const getUrlParam = (search, urlParam) => {
    return new URLSearchParams(this.props.location.search).get(urlParam)
  }
}