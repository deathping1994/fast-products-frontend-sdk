export function Login({ themeDetails }) {
  return (
    <>
      <div class="login-container">
        <a href={themeDetails?.data?.login_page}>
          Login to view wallet activity
        </a>
      </div>
    </>
  );
}
