import { MouseEventHandler } from "react";
import { EntryIcon } from "./entry-icon";
import { ENTRY_TYPE } from "./types";
import { ENTRY_LIST_ITEM_METADATA } from "./entry-list";

type EntryProps = {
  displayName: string;
  type: ENTRY_TYPE;
  onClick: MouseEventHandler;
  isSelected: boolean;
  isBaseSelection: boolean;
  metadata?: ENTRY_LIST_ITEM_METADATA;
};

export function Entry({
  displayName,
  type,
  onClick,
  isSelected,
  isBaseSelection,
  metadata,
}: EntryProps) {
  /**
   * Base entry for any item
   * Provides rendering and sort of selection of the entity based on the type
   */
  let className =
    "entry " +
    (isSelected
      ? "entry-selected"
      : isBaseSelection
      ? "entry-base-selection"
      : "entry-unselected");

  return (
    <div className={className} onClick={onClick}>
      <EntryIcon type={type} />
      <span className="entry-text">{displayName}</span>
      {metadata?.disk && (
        <span className="entry-metadata-disk">
          {metadata.disk.sizeLeft} / {metadata.disk.sizeTotal}
        </span>
      )}
    </div>
  );
}