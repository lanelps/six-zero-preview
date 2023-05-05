import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as BlockComponents from "../components/blocks";

export const blockBuilder = (blocks) => {
  const pageBlocks = [];

  blocks?.forEach((block) => {
    if (Object.keys(block).length === 0) return;

    const blockName = block?.__typename.replace(`Sanity`, ``);
    const blockKey = `block-${blockName}-${uuidv4()}`;

    const Block = BlockComponents?.[blockName];

    if (!Block) {
      pageBlocks.push(<React.Fragment key={blockKey} />);
    }

    pageBlocks.push(
      <section id={blockKey} key={blockKey} className="page-section">
        <Block data={block} />
      </section>
    );
  });

  return pageBlocks;
};
