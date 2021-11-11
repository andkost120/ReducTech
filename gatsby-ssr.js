const React = require("react")
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossOrigin="anonymous"
    ></script>,
  ])
}