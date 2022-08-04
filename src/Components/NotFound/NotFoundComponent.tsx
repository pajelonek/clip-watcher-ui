import {Grid} from "@material-ui/core";
import Typography from "@mui/material/Typography";


export default function NotFoundComponent() {
    return (
        <Grid container
              alignItems="center"
              justifyContent="center">
            <Grid item xs={8}>
                <Typography variant={"h2"}
                            align={"center"}
                            marginTop={"2%"}
                >
                    404 PAGE NOT FOUND
                </Typography>
            </Grid>
        </Grid>
    );
}
