import React from "react";
import Stack from "react-bootstrap/Stack";
import SelectControl from "../../atoms/SelectControl";
import styles from "./StateSelectors.module.scss";

interface Props {
  stacked?: boolean;
  onStoreChange: (store: string) => void;
  onKeyChange: (key: string) => void;
  onTypeChange: (key: string) => void;
  selectedStore?: string;
  selectedKey?: string;
  selectedType?: string;
  storeOptions?: string[];
  keyOptions?: string[];
}

export default function StateSelectors({
  stacked,
  onStoreChange,
  onKeyChange,
  onTypeChange,
  selectedKey,
  selectedStore,
  selectedType,
  storeOptions,
  keyOptions,
}: Props) {
  return (
    <>
      <Stack
        direction={stacked ? "vertical" : "horizontal"}
        className={styles.compContainer}
      >
        <SelectControl
          placeHolder="Store"
          options={storeOptions?.map((option) => ({
            label: option,
            value: option,
          }))}
          onChange={(option) => onStoreChange(option?.value ?? "")}
          defaultValue={selectedStore}
          className={styles.selector}
        />
        <SelectControl
          placeHolder="Key"
          options={keyOptions?.map((option) => ({
            label: option,
            value: option,
          }))}
          onChange={(option) => onKeyChange(option?.value ?? "")}
          defaultValue={selectedKey}
          className={styles.selector}
        />
        <SelectControl
          placeHolder="Type"
          options={[
            { label: "state", value: "state" },
            { label: "payload", value: "payload" },
            { label: "features", value: "features" },
            { label: "actions", value: "actions" },
          ]}
          onChange={(option) => onTypeChange(option?.value ?? "")}
          defaultValue={selectedType}
          className={styles.selector}
        />
      </Stack>
    </>
  );
}