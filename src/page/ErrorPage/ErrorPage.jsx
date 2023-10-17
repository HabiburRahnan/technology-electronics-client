const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-2xl "> Unexpected Application Error!</h2>
      <span className="text-xl ">
        404 Not Found 💿 Hey developer 👋
        <br />
        You can provide a way better UX
        <br />
        than this when your app throws errors by providing your own
        ErrorBoundary or errorElement prop on your route.
      </span>
    </div>
  );
};

export default ErrorPage;
