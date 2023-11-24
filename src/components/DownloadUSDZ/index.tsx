import { FileOpener } from "@capacitor-community/file-opener";
import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, CircularProgress } from "@mui/material";
import { useState, type FunctionComponent } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

const DownloadUSDZ: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [isDownloading, setIsDownloading] = useState(false); // Checks download state

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~
  const downloadFile = async (url: string, path?: string) => {
    // Check for mobile platform
    if (Capacitor.isNativePlatform()) {
      setIsDownloading(true);
      try {
        // Downloads a file into cache
        const { path: filePath } = await Filesystem.downloadFile({
          url,
          path,
          method: "GET",
          directory: Directory.Cache,
        });

        // Opens the file
        await FileOpener.open({
          filePath,
        });
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsDownloading(false);
      }
    } else {
      window.location.href = url;
    }
  };

  // ~~~~~ JSX ~~~~~
  return (
    <Box>
      <Button
        disabled={isDownloading}
        variant="contained"
        startIcon={
          isDownloading ? (
            <CircularProgress sx={{ color: "#fff" }} size={20} />
          ) : (
            <FileDownloadIcon sx={{ fontSize: 16 }} />
          )
        }
        onClick={() =>
          downloadFile(
            "https://github.com/ideaguy3d/3d-model-viewer/raw/master/examples/assets/Astronaut.usdz",
            uuid()
          )
        }
      >
        Download
      </Button>
    </Box>
  );
};

export default DownloadUSDZ;
