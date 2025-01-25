import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import React from "react";


const SubmitModal = ({
  isOpen,
  toggleModal,
  handleSubmit,
  pet,
  formData,
  handleChange,
  user,
}) => {
  
  return (
    <Dialog open={isOpen} handler={toggleModal} className="max-w-lg mx-auto">
      <DialogHeader className="text-xl font-bold">
        Adopt {pet.petName}
      </DialogHeader>
      <DialogBody divider>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              User Name
            </label>
            <Input
              value={user?.displayName}
              disabled
              className="bg-gray-200 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <Input
              value={user.email}
              disabled
              className="bg-gray-200 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              type="tel"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={toggleModal}
          className="mr-2"
        >
          Cancel
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default SubmitModal;
