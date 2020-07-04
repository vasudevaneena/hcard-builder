import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
// import HcardBuilder from "../HcardBuilder/HcardBuilder";
import UserImage from "./UserImage"
configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(<UserImage />);
});


describe("<ModalImage /> rendering", () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
    it("should render one <ModalImage>", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });
   
  });

  describe("Button Click", () => {
   wrapper = mount(<UserImage />);
    //wrapper.instance().forceUpdate();
     wrapper.update();
    console.log("before click",wrapper.debug());
    it("should not show errors for vaid values", async () => {
     debugger
      wrapper.find("img").simulate("click");
      console.log("after click",wrapper.debug());
      expect(wrapper.find("img")).toHaveLength(2);
        expect(wrapper.find("a")).toHaveLength(3);
    });
  });
  
    
  