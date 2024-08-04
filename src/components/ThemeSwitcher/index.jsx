import React from "react";
import { connect } from "react-redux";
import CONSTANTS from "../../constants";
import { updateTheme } from "../../store/slices/themeSlice";

const { THEMES } = CONSTANTS;

function ThemeSwitcher({ theme, setTheme }) {
  const onChangeTheme = ({ target: { value } }) => setTheme(value);

  return (
    <div>
      <select value={theme} onChange={onChangeTheme}>
        {Object.keys(THEMES).map((theme) => (
          <option key={THEMES[theme]} value={THEMES[theme]}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}

const mapStateToProps = ({ themeData }) => {
  return themeData;
};

const mapDispatchToProps = (dispatch) => ({
  setTheme: (value) => dispatch(updateTheme(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
