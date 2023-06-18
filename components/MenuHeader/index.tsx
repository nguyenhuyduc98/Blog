import Button from "@/container/Button";
import Menu from "@/container/Menu";
import { AiOutlineMenu } from "react-icons/ai";

const MenuHeader = () => {
    return (
        <>
            <div className="md:hidden">
                <Menu
                    overlay={
                        <>
                            <div>test</div>
                        </>
                    }
                >
                    <Button>
                        <AiOutlineMenu size={20} />
                    </Button>
                </Menu>
            </div>
            <div className="hidden md:flex text-white">test</div>
        </>
    );
};

export default MenuHeader;
