import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alerts">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
      </div>
    )
  );
}
