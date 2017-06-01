let quoteUrl = 'https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote'

export const setQuote = (quote) => {
  return {
    type: 'SET_QUOTE',
    payload: quote
  }
}

export const beginFetch = () => {
  return {
    type: 'BEGIN_FETCH',
  }
}

export const endFetch = () => {
  return {
    type: 'END_FETCH',
  }
}


export const fetchQuote = () => {
  return async (dispatch) => {
    dispatch(beginFetch())
    try {
      let response = await fetch(quoteUrl);
      let responseJson = await response.json();
      dispatch(setQuote(responseJson))
    } catch(error) {
      console.log(error);
    }
    dispatch(endFetch())
  }
}