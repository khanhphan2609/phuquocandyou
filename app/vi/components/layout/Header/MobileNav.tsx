"use client";

import NavLinks from "./NavLinks";
import { CloseIcon, FaUserCircleIcon } from "../../ui/Icons";
import LoginButton from "../../ui/LoginButton";

type Props = {
  open: boolean;
  pathname: string | null;
  onClose: () => void;
};

export default function MobileNav({ open, pathname, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
      />

      <div className="fixed top-0 right-0 h-full w-4/5 bg-[#001524]/95 z-50 lg:hidden">
        <div className="p-6 flex flex-col gap-4">
          <button onClick={onClose} className="self-end">
            <CloseIcon size={20} />
          </button>

          <NavLinks
            pathname={pathname}
            variant="mobile"
            onItemClick={onClose}
          />

          <LoginButton variant="mobile" />
        </div>
      </div>
    </>
  );
}
