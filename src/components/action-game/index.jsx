import { Flex, Typography } from "../../styles/globalStyle";
import { Action } from "./styles";

export const ActionsGame = ({ actions, disabled, onClick }) => {
  return (
    <Flex>
      {actions.map((action) => (
        <Action key={action.value} disabled={disabled} onClick={() => onClick(action)}>
          <Typography size="32px">{action.label}</Typography>
        </Action>
      ))}
    </Flex>
  );
};
