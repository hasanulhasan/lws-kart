"use client";
import { editShippingProfile } from "@/actions";
import { getUserCheck } from "@/database/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Account() {
  const router = useRouter();
  const [user, setUser] = useState({});

  const [shippingAddressEditMode, setShippingAddressEditMode] = useState(false);
  const [billingAddressEditMode, setBillingAddressEditMode] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleShippiAddress = async () => {
    const profileInfo = {
      userId: user?.id,
      data: {
        shippingName: shippingAddress.name,
        shippingPhone: shippingAddress.phone,
        shippingAddress: shippingAddress.address,
      },
    };

    try {
      const resStatus = await editShippingProfile(profileInfo);

      if (resStatus === 201) {
        toast.success("Edit Success");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleBillingAddress = async () => {
    const profileInfo = {
      userId: user?.id,
      data: {
        billingName: shippingAddress.name,
        billingPhone: shippingAddress.phone,
        billingAddress: shippingAddress.address,
      },
    };

    try {
      const resStatus = await editShippingProfile(profileInfo);

      if (resStatus === 201) {
        toast.success("Edit Success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserCheck();
      setUser(user);
      if (!user?.email) {
        router.replace("/login");
      }
    };
    fetchUser();
  }, [router]);

  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Account</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- account wrapper --> */}
      <div className="container  items-start gap-6 pt-4 pb-16">
        {/* <!-- info --> */}
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Personal Profile
              </h3>
              <a href="#" className="text-primary">
                Edit
              </a>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-700 font-medium">{user?.name}</h4>
              <p className="text-gray-800">{user?.email}</p>
              {/* <p className="text-gray-800">0811 8877 988</p> */}
            </div>
          </div>

          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Shipping address
              </h3>
              <button
                onClick={() => {
                  if (shippingAddressEditMode) {
                    handleShippiAddress();
                  }
                  setShippingAddressEditMode(!shippingAddressEditMode);
                }}
                className="text-primary"
              >
                {shippingAddressEditMode ? "Save" : "Edit"}
              </button>
            </div>
            {shippingAddressEditMode ? (
              <>
                <input
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Name"
                  className="rounded-md mb-2 border-gray-200 w-full"
                />
                <input
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      address: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Address"
                  className="rounded-md mb-2 border-gray-200 w-full"
                />
                <input
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      phone: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Phone"
                  className="rounded-md mb-2 border-gray-200 w-full"
                />
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <h4 className="text-gray-700 font-medium">
                    {shippingAddress.name}
                  </h4>
                  <p className="text-gray-800">{shippingAddress.address}</p>
                  <p className="text-gray-800">{shippingAddress.phone}</p>
                </div>
              </>
            )}
          </div>

          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-lg">
                Billing address
              </h3>
              <button
                onClick={() => {
                  if (billingAddressEditMode) {
                    handleBillingAddress();
                  }
                  setBillingAddressEditMode(!billingAddressEditMode);
                }}
                className="text-primary"
              >
                {billingAddressEditMode ? "Save" : "Edit"}
              </button>
            </div>
            {billingAddressEditMode ? (
              <>
                <input
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Name"
                  className="rounded-md mb-2 border-gray-200 w-full"
                />
                <input
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      address: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Address"
                  className="rounded-md mb-2 border-gray-200 w-full"
                />
                <input
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      phone: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Phone"
                  className="rounded-md mb-2 border-gray-200 w-full"
                />
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <h4 className="text-gray-700 font-medium">John Doe</h4>
                  <p className="text-gray-800">Medan, North Sumatera</p>
                  <p className="text-gray-800">20371</p>
                  <p className="text-gray-800">0811 8877 988</p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <!-- ./info --> */}
      </div>
      {/* <!-- ./account wrapper --> */}
      <Toaster />
    </>
  );
}
