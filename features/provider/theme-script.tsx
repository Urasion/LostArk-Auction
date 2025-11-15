export const ThemeScript = () => {
  const script = `
    (function() {
      const getTheme = () => {
        const value = "; " + document.cookie;
        const parts = value.split("; theme=");
        if (parts.length === 2) {
          return parts.pop().split(";").shift();
        }
        return 'light'; // 쿠키가 없으면 기본값
      };

      const theme = getTheme();
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};
