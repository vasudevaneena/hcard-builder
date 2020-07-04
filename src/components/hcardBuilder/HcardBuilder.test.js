import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount } from "enzyme";
import HcardBuilder from "./HcardBuilder";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(<HcardBuilder />);
});


describe("<Form /> rendering", () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
    it("should render one <UserImage>", () => {
      expect(wrapper.find("UserImage")).toHaveLength(1);
    });
    it("should render child component  <HcardPreview>", () => {
      expect(wrapper.find("HcardPreview")).toHaveLength(1);
    });
    it("should render one <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });
 
    it("should render 2 <button>s", () => {
      expect(wrapper.find("button")).toHaveLength(2);
    });
  });

  describe("<Form /> interactions", () => {
    it("should update the email input field", async () => {
        
      //console.log(wrapper.debug());   
      wrapper.update();
      await wrapper
        .find("#email")
        .simulate("change", { target: {name:"email", value: "xyz@gmail.com" } });
       
      expect(wrapper.find("#email").props().value).toEqual("xyz@gmail.com");
    });
  
    
  });