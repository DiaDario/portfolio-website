function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-ink/5">
      <p className="text-xs text-ink/25">
        Designed & built by Dario Diana &mdash; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
