import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { updateSpectrumValue, getSpectrumValue } from "./slice";
import styles from "./styles.module.css";

import {
  SpectrumAxis,
  SpectrumAxisGroup,
  isGroup,
  SpectrumEndpoint,
} from "./axes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGenderless } from "@fortawesome/free-solid-svg-icons";

const SingleAxis: FC<SpectrumAxis> = ({
  shortName,
  longName,
  description,
  endpoints,
}) => {
  const selectedValue = useSelector((state: RootState) =>
    getSpectrumValue(state, shortName)
  );
  const dispatch = useDispatch();

  const centerOption: SpectrumEndpoint = {
    label: "",
    icon: faGenderless,
  };

  const options: SpectrumEndpoint[] = [endpoints[0]];
  if (endpoints.length === 2) {
    if (
      endpoints[0].label === endpoints[1].label &&
      endpoints[0].icon.iconName === endpoints[1].icon.iconName
    ) {
      options.push(endpoints[0], endpoints[0]);
    } else {
      options.push(centerOption, centerOption);
    }
    options.push(endpoints[1]);
  } else {
    options.push(
      centerOption,
      centerOption,
      endpoints[1],
      centerOption,
      centerOption,
      endpoints[2],
      centerOption,
      centerOption
    );
  }

  return (
    <div className={styles["likert"]}>
      <h4>{longName}</h4>
      <form>
        <legend>{description}</legend>
        <fieldset
          className={`${styles["form-options"]} ${
            styles[`form-options-${endpoints.length}-endpoints`]
          }`}
        >
          {options.map(({ icon, label }, i) => (
            <div
              className={`${styles["form-option"]} ${
                selectedValue === i ? styles["form-option-selected"] : ""
              }`}
              key={`${shortName}-${i}`}
            >
              <input
                type="radio"
                name={`${shortName}-match`}
                id={`${shortName}-${i}`}
                value={i}
                onChange={() =>
                  dispatch(
                    updateSpectrumValue({
                      shortName,
                      value: i,
                    })
                  )
                }
                defaultChecked={selectedValue === i}
              />
              <label htmlFor={`${shortName}-${i}`}>
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </label>
            </div>
          ))}
        </fieldset>
      </form>
    </div>
  );
};

const AxisGroup: FC<SpectrumAxisGroup> = ({ label, description, axes }) => {
  return (
    <div className={styles["likert-group"]}>
      <h4>{label}</h4>
      <span>{description}</span>
      {axes.map((props) => (
        <SingleAxis {...props} key={props.shortName} />
      ))}
    </div>
  );
};

const Likert: FC<SpectrumAxis | SpectrumAxisGroup> = (props) => {
  return isGroup(props) ? <AxisGroup {...props} /> : <SingleAxis {...props} />;
};

export { axes, isGroup } from "./axes";
export default Likert;
