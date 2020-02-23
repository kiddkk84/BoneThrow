import React from "react";

import MenuItem from "./menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    https: this.state = {
             sections: [
               {
                 title: "canned food",
                 imageUrl: "https://i.ibb.co/dpzWZ1S/canned-food.jpg",
                 id: 1
               },
               {
                 title: "dry food",
                 imageUrl: "https://i.ibb.co/Sr64PNs/dry-food.jpg",
                 id: 2
               },
               {
                 title: "food topper",
                 imageUrl: "https://i.ibb.co/D47mKvq/food-topper.jpg",
                 id: 3
               },
               {
                 title: "treats",
                 imageUrl: "https://i.ibb.co/VvGNg6r/dog-treats.jpg",
                 size: "large",
                 id: 4
               },
               {
                 title: "supplies",
                 imageUrl: "https://i.ibb.co/b3QHXXR/dogs-supplies.jpg",
                 size: "large",
                 id: 5
               }
             ]
           };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
