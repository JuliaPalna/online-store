import { Input } from "../../ui/Input";
import { useSearchValue } from "../../../hook/useSearchValue";
import { Field } from "../../ui/Field";
import { Box } from "../../ui/Box";
import { SearchIcon } from "../../Icon";
import css from "./index.module.scss";
import { SearchProductListModalView } from "../SearchProductListModalView";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import cn from "classnames";
import { useSearchModalStore } from "../../../store/useSearchModalStore";

export function Search() {
  const { formik } = useSearchValue();
  const modalSearch = useSearchModalStore();
  const searchRef = useRef(null);

  function handelClick() {
    if (modalSearch.isOpen) {
      modalSearch.close();
    } else {
      modalSearch.open();
    }
  }

  //fix bug
  // Argument of type 'RefObject<HTMLDivElement | null>' is not assignable to parameter of type 'RefObject<HTMLElement> | RefObject<HTMLElement>[]'.
  // useOnClickOutside(ref as unknown as React.RefObject<HTMLDivElement>, modalSearch.close);
  useOnClickOutside(
    searchRef as unknown as React.RefObject<HTMLElement>,
    () => {
      modalSearch.close();
    },
  );

  return (
    <Box className={cn({ [css.wrap]: true })}>
      <Box className={css.search}>
        <Box className={css.icon}>
          <SearchIcon />
        </Box>

        <Field name="search" label="Поиск" data={formik} hidden={true}>
          <Input name="search" data={formik} />
        </Field>
      </Box>

      <Box
        refValue={searchRef}
        onClick={handelClick}
        className={cn({
          [css.modal]: true,
          [css.open]: modalSearch.isOpen,
        })}
      >
        <SearchProductListModalView />
      </Box>
    </Box>
  );
}
