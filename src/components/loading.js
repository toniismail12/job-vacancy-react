import ReactDOM from 'react-dom';

function Loading() {
    return(
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-full">
            <div className="border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
              <div className="text-center justify-center rounded-md">
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                  <div className="border-t-transparent border-solid animate-spin  rounded-full border-yellow-400 border-4 h-12 w-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-50 bg-black"></div>
      </>
    )
}

let isLoading = false;

function ShowLoading() {
  if (!isLoading) {
    isLoading = true;
    const loadingElement = <Loading />;
    const container = document.createElement('div');
    container.setAttribute('id', 'loading-container');
    document.body.appendChild(container);
    ReactDOM.render(loadingElement, container);
  }
}

function HideLoading() {
  if (isLoading) {
    isLoading = false;
    const container = document.getElementById('loading-container');
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  }
}

export default ShowLoading;
export { ShowLoading, HideLoading }
