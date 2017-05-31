
export const fetchQuote = async () => {
  let mockyUrl = 'http://www.mocky.io/v2/592ee4b61100000902b3909c'
  let quoteUrl = 'https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote'

  let init = {
    method: 'GET',
    headers: new Headers(),
  }

  try {
    let response = await fetch(quoteUrl);
    let responseJson = await response.json();
    return responseJson
  } catch(error) {
    console.log(error);
  }
}
