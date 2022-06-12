export class Fetching_API {
  constructor(api) {
    this.api = api;
  }

  fetching() {
    const promise = fetch(this.api)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((result) => {
        return result.json();
      })
      .catch((error) => console.error("There was a problem:", error));
    return promise;
  }
}
