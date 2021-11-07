import React from "react";

interface ChatSVGProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ChatSVG = ({ className }: ChatSVGProps) => {
  return (
    <svg
      width={379}
      height={157}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={6.268}
        y={79.107}
        width={305.036}
        height={69.429}
        rx={11.143}
        fill="#EBF1FF"
      />
      <path
        d="M36.223 99.628L33.27 109.82h-1.492l-2.369-8.204-2.457 8.204-1.477.015-2.852-10.208h1.419l2.223 8.643 2.457-8.643h1.491l2.34 8.614 2.238-8.614h1.433zm2.364.877a.873.873 0 01-.644-.263.875.875 0 01-.263-.644c0-.253.087-.468.263-.643a.875.875 0 01.644-.263c.243 0 .448.088.614.263.175.175.263.39.263.644a.875.875 0 01-.263.643.81.81 0 01-.614.263zm.643 1.302v8.014H37.9v-8.014h1.33zm4.111 1.097v4.724c0 .39.083.668.249.833.165.156.453.234.862.234h.98v1.126h-1.199c-.74 0-1.297-.17-1.667-.511-.37-.342-.556-.902-.556-1.682v-4.724h-1.038v-1.097h1.038v-2.018h1.331v2.018h2.091v1.097h-2.091zm3.426 2.881c0-.819.166-1.536.497-2.15a3.61 3.61 0 011.36-1.448 3.792 3.792 0 011.945-.512c.703 0 1.312.151 1.829.454.516.302.901.682 1.155 1.14v-1.462h1.346v8.014h-1.346v-1.491c-.263.468-.658.858-1.185 1.17-.516.302-1.12.453-1.813.453a3.632 3.632 0 01-1.93-.526 3.693 3.693 0 01-1.36-1.478c-.332-.633-.498-1.355-.498-2.164zm6.786.015c0-.605-.122-1.131-.366-1.58a2.521 2.521 0 00-.994-1.024 2.616 2.616 0 00-1.36-.365c-.497 0-.95.117-1.36.351-.41.234-.736.575-.98 1.023-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.609.243.448.57.794.98 1.038.41.234.863.351 1.36.351.497 0 .95-.117 1.36-.351.42-.244.75-.59.994-1.038.244-.459.366-.99.366-1.594zm13.452-4.139c.624 0 1.18.131 1.667.395.487.253.873.638 1.155 1.155.283.517.424 1.146.424 1.887v4.723h-1.316v-4.533c0-.8-.2-1.409-.6-1.828-.39-.429-.92-.644-1.593-.644-.693 0-1.244.224-1.653.673-.41.439-.614 1.077-.614 1.916v4.416h-1.317v-4.533c0-.8-.2-1.409-.6-1.828-.39-.429-.92-.644-1.593-.644-.693 0-1.244.224-1.653.673-.41.439-.614 1.077-.614 1.916v4.416h-1.331v-8.014h1.33v1.155a2.64 2.64 0 011.054-.965 3.26 3.26 0 011.477-.336c.673 0 1.267.151 1.784.453.517.302.902.746 1.156 1.331a2.627 2.627 0 011.111-1.316 3.274 3.274 0 011.726-.468zm16.583.95c0 .849-.293 1.555-.878 2.121-.575.556-1.457.834-2.647.834h-1.96v4.255h-1.33V99.628h3.29c1.15 0 2.023.278 2.618.833.605.556.907 1.273.907 2.15zm-3.525 1.858c.741 0 1.287-.161 1.638-.483.351-.322.527-.78.527-1.375 0-1.257-.722-1.886-2.165-1.886h-1.96v3.744h1.96zm4.9 1.316c0-.819.167-1.536.498-2.15a3.611 3.611 0 011.36-1.448 3.792 3.792 0 011.945-.512c.702 0 1.312.151 1.829.454.516.302.901.682 1.155 1.14v-1.462h1.345v8.014H91.75v-1.491c-.263.468-.658.858-1.185 1.17-.516.302-1.12.453-1.813.453a3.633 3.633 0 01-1.93-.526 3.694 3.694 0 01-1.36-1.478c-.332-.633-.498-1.355-.498-2.164zm6.787.015c0-.605-.122-1.131-.366-1.58a2.52 2.52 0 00-.994-1.024 2.616 2.616 0 00-1.36-.365c-.498 0-.95.117-1.36.351-.41.234-.737.575-.98 1.023-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.609.243.448.57.794.98 1.038.41.234.862.351 1.36.351.497 0 .95-.117 1.36-.351.42-.244.75-.59.994-1.038.244-.459.366-.99.366-1.594zm7.719-4.139c.975 0 1.764.297 2.369.892.604.585.907 1.433.907 2.545v4.723h-1.317v-4.533c0-.8-.199-1.409-.599-1.828-.4-.429-.946-.644-1.638-.644-.702 0-1.263.219-1.682.658-.41.439-.614 1.078-.614 1.916v4.431h-1.331v-8.014h1.33v1.141a2.65 2.65 0 011.068-.951c.459-.224.96-.336 1.507-.336zm6.356-1.156a.872.872 0 01-.643-.263.872.872 0 01-.263-.644c0-.253.087-.468.263-.643a.874.874 0 01.643-.263c.244 0 .449.088.615.263.175.175.263.39.263.644a.876.876 0 01-.263.643.81.81 0 01-.615.263zm.644 1.302v8.014h-1.331v-8.014h1.331zm9.78-2.18c1.111 0 2.072.21 2.881.63a4.27 4.27 0 011.872 1.769c.439.771.658 1.677.658 2.721 0 1.043-.219 1.95-.658 2.72-.429.76-1.053 1.345-1.872 1.755-.809.4-1.77.599-2.881.599h-3.174V99.628h3.174zm0 9.098c1.316 0 2.32-.347 3.012-1.039.693-.702 1.039-1.682 1.039-2.939 0-1.268-.351-2.258-1.053-2.969-.692-.712-1.692-1.068-2.998-1.068h-1.843v8.015h1.843zm10.881 1.228a4.144 4.144 0 01-2.047-.512 3.718 3.718 0 01-1.434-1.448c-.341-.633-.512-1.365-.512-2.193 0-.819.176-1.541.527-2.165a3.668 3.668 0 011.462-1.448c.615-.341 1.302-.512 2.063-.512.76 0 1.447.171 2.062.512a3.598 3.598 0 011.448 1.433c.36.624.541 1.351.541 2.18 0 .828-.186 1.56-.556 2.193a3.765 3.765 0 01-1.477 1.448 4.259 4.259 0 01-2.077.512zm0-1.17c.478 0 .926-.112 1.346-.336a2.524 2.524 0 001.009-1.009c.263-.449.395-.995.395-1.638 0-.644-.127-1.19-.381-1.638-.253-.449-.585-.78-.994-.995a2.73 2.73 0 00-1.331-.336 2.76 2.76 0 00-1.346.336c-.399.215-.721.546-.965.995-.244.448-.365.994-.365 1.638 0 .653.117 1.204.351 1.652.243.449.565.785.965 1.009.4.215.838.322 1.316.322zm10.554 1.038l-3.144-3.539v3.539h-1.331V98.999h1.331v6.362l3.086-3.554h1.857l-3.773 3.993 3.788 4.021h-1.814zm4.894-6.917v4.724c0 .39.083.668.249.833.166.156.453.234.863.234h.98v1.126h-1.199c-.741 0-1.297-.17-1.668-.511-.37-.342-.555-.902-.555-1.682v-4.724h-1.039v-1.097h1.039v-2.018h1.33v2.018h2.092v1.097h-2.092zm7.419 7.049a4.144 4.144 0 01-2.047-.512 3.718 3.718 0 01-1.434-1.448c-.341-.633-.512-1.365-.512-2.193 0-.819.176-1.541.527-2.165a3.668 3.668 0 011.462-1.448c.615-.341 1.302-.512 2.063-.512.76 0 1.447.171 2.062.512a3.598 3.598 0 011.448 1.433c.36.624.541 1.351.541 2.18 0 .828-.186 1.56-.556 2.193a3.765 3.765 0 01-1.477 1.448 4.259 4.259 0 01-2.077.512zm0-1.17c.478 0 .926-.112 1.346-.336a2.524 2.524 0 001.009-1.009c.263-.449.395-.995.395-1.638 0-.644-.127-1.19-.381-1.638-.253-.449-.585-.78-.994-.995a2.73 2.73 0 00-1.331-.336 2.76 2.76 0 00-1.346.336c-.399.215-.721.546-.965.995-.244.448-.365.994-.365 1.638 0 .653.117 1.204.351 1.652.243.449.565.785.965 1.009.4.215.838.322 1.316.322zm7.41-5.674a2.56 2.56 0 01.994-1.068c.439-.254.97-.38 1.594-.38v1.374h-.351c-1.491 0-2.237.81-2.237 2.428v4.358h-1.331v-8.014h1.331v1.302zm5.719 4.87l-1.638 3.934h-.892l1.067-3.934h1.463zm5.365-2.179c0-.829.166-1.551.497-2.165a3.584 3.584 0 011.375-1.448c.595-.341 1.272-.512 2.033-.512.985 0 1.794.239 2.428.717.643.478 1.067 1.141 1.272 1.989h-1.433a2.043 2.043 0 00-.805-1.155c-.39-.283-.877-.425-1.462-.425-.761 0-1.375.264-1.843.79-.468.517-.702 1.253-.702 2.209 0 .965.234 1.711.702 2.237.468.527 1.082.79 1.843.79.585 0 1.072-.137 1.462-.41.39-.273.658-.663.805-1.17h1.433c-.215.819-.644 1.478-1.287 1.975-.644.487-1.448.731-2.413.731-.761 0-1.438-.171-2.033-.512a3.584 3.584 0 01-1.375-1.448c-.331-.624-.497-1.355-.497-2.193zm10.595 2.925h3.934v1.096h-5.455v-1.096l3.89-5.836h-3.861v-1.082h5.397v1.082l-3.905 5.836zm12.988-6.918v8.014h-1.331v-1.184a2.633 2.633 0 01-1.068.965 3.287 3.287 0 01-1.491.336c-.624 0-1.185-.126-1.682-.38a2.906 2.906 0 01-1.185-1.17c-.283-.517-.424-1.145-.424-1.886v-4.695h1.316v4.519c0 .79.2 1.399.6 1.828.4.419.946.629 1.638.629.712 0 1.272-.219 1.682-.658.409-.439.614-1.077.614-1.916v-4.402h1.331zm3.183-1.302a.874.874 0 01-.644-.263.904.904 0 01-.248-.644c0-.253.083-.468.248-.643a.876.876 0 01.644-.263.83.83 0 01.629.263c.175.175.263.39.263.644a.876.876 0 01-.263.643.827.827 0 01-.629.263zm.658 11.057c0 .712-.18 1.233-.541 1.565-.361.331-.887.497-1.58.497h-.775v-1.126h.556c.371 0 .629-.073.775-.22.156-.146.234-.394.234-.745v-9.726h1.331v9.755zm9.785-6.055c0 .254-.015.522-.044.804h-6.406c.049.79.317 1.409.805 1.858.497.439 1.096.658 1.798.658.576 0 1.053-.132 1.434-.395.39-.273.663-.634.819-1.082h1.433a3.478 3.478 0 01-.907 1.55c-.429.429-.97.731-1.623.907l-.41.205c-.585.282-.877.624-.877 1.023 0 .225.078.395.234.512.156.127.365.19.629.19.273 0 .59-.063.95-.19v.878c-.39.136-.765.204-1.126.204-.497 0-.921-.121-1.272-.365-.341-.234-.512-.6-.512-1.097 0-.478.21-.897.629-1.258a3.945 3.945 0 01-1.755-.658 3.67 3.67 0 01-1.185-1.419c-.283-.594-.424-1.272-.424-2.032 0-.829.166-1.556.497-2.18a3.462 3.462 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.498a3.376 3.376 0 011.345 1.374c.322.576.483 1.229.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.301a2.119 2.119 0 00-.922-.834 2.745 2.745 0 00-1.272-.293c-.673 0-1.248.215-1.726.644-.468.429-.736 1.024-.804 1.784h5.06zm10.307 4.724c-.615 0-1.166-.102-1.653-.307-.488-.215-.873-.507-1.155-.878a2.367 2.367 0 01-.468-1.301h1.374c.039.4.225.726.556.98.341.253.785.38 1.331.38.507 0 .907-.112 1.199-.336.293-.225.439-.507.439-.849a.821.821 0 00-.468-.775c-.312-.175-.795-.346-1.448-.512a11.876 11.876 0 01-1.462-.468 2.764 2.764 0 01-.966-.716c-.263-.322-.395-.741-.395-1.258 0-.41.122-.785.366-1.126.244-.341.59-.61 1.038-.805.449-.204.961-.307 1.536-.307.887 0 1.604.225 2.15.673.546.449.838 1.063.877 1.843h-1.33c-.03-.419-.2-.756-.512-1.009-.303-.254-.712-.381-1.229-.381-.478 0-.858.103-1.141.308-.282.204-.424.472-.424.804a.92.92 0 00.249.658c.175.166.39.302.643.41.264.097.624.209 1.083.336.575.156 1.043.312 1.404.468.36.146.668.37.921.673.263.302.4.697.41 1.184 0 .439-.122.834-.366 1.185-.244.351-.59.629-1.038.834-.439.195-.946.292-1.521.292zm5.71-9.448a.872.872 0 01-.643-.263.873.873 0 01-.264-.644c0-.253.088-.468.264-.643a.874.874 0 01.643-.263.81.81 0 01.614.263c.176.175.264.39.264.644a.873.873 0 01-.264.643.807.807 0 01-.614.263zm.644 1.302v8.014h-1.331v-8.014h1.331zm9.8 3.7c0 .254-.015.522-.044.804h-6.406c.049.79.317 1.409.804 1.858.498.439 1.097.658 1.799.658.576 0 1.053-.132 1.434-.395.39-.273.663-.634.819-1.082h1.433a3.478 3.478 0 01-.907 1.55c-.429.429-.97.731-1.623.907l-.41.205c-.585.282-.877.624-.877 1.023 0 .225.078.395.234.512.156.127.365.19.629.19.273 0 .589-.063.95-.19v.878c-.39.136-.765.204-1.126.204-.497 0-.921-.121-1.272-.365-.342-.234-.512-.6-.512-1.097 0-.478.209-.897.629-1.258a3.945 3.945 0 01-1.755-.658 3.67 3.67 0 01-1.185-1.419c-.283-.594-.424-1.272-.424-2.032 0-.829.166-1.556.497-2.18a3.462 3.462 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.498a3.376 3.376 0 011.345 1.374c.322.576.483 1.229.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.301a2.119 2.119 0 00-.922-.834 2.745 2.745 0 00-1.272-.293c-.673 0-1.248.215-1.726.644-.468.429-.736 1.024-.804 1.784h5.06zm6.972.556c0-.819.166-1.536.497-2.15a3.616 3.616 0 011.36-1.448 3.822 3.822 0 011.96-.512 3.58 3.58 0 011.74.439c.537.283.946.658 1.229 1.126v-4.241h1.345v10.822h-1.345v-1.506c-.263.478-.653.873-1.17 1.185-.517.302-1.121.453-1.814.453a3.71 3.71 0 01-1.945-.526 3.698 3.698 0 01-1.36-1.478c-.331-.633-.497-1.355-.497-2.164zm6.786.015c0-.605-.122-1.131-.366-1.58a2.517 2.517 0 00-.994-1.024 2.617 2.617 0 00-1.36-.365c-.498 0-.951.117-1.36.351a2.54 2.54 0 00-.98 1.023c-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.609.243.448.57.794.98 1.038.409.234.862.351 1.36.351.497 0 .95-.117 1.36-.351.419-.244.751-.59.994-1.038.244-.459.366-.99.366-1.594zm4.808 2.925h3.935v1.096h-5.456v-1.096l3.891-5.836h-3.861v-1.082h5.396v1.082l-3.905 5.836zm6.568-8.22a.872.872 0 01-.643-.263.873.873 0 01-.264-.644c0-.253.088-.468.264-.643a.874.874 0 01.643-.263.81.81 0 01.614.263c.176.175.264.39.264.644a.873.873 0 01-.264.643.807.807 0 01-.614.263zm.644 1.302v8.014h-1.331v-8.014h1.331zm5.325 8.146c-.615 0-1.166-.102-1.653-.307-.488-.215-.873-.507-1.155-.878a2.367 2.367 0 01-.468-1.301h1.374c.039.4.225.726.556.98.341.253.785.38 1.331.38.507 0 .907-.112 1.199-.336.293-.225.439-.507.439-.849a.821.821 0 00-.468-.775c-.312-.175-.795-.346-1.448-.512a11.876 11.876 0 01-1.462-.468 2.764 2.764 0 01-.966-.716c-.263-.322-.395-.741-.395-1.258 0-.41.122-.785.366-1.126.244-.341.59-.61 1.038-.805.449-.204.961-.307 1.536-.307.887 0 1.604.225 2.15.673.546.449.838 1.063.877 1.843h-1.33c-.03-.419-.2-.756-.512-1.009-.303-.254-.712-.381-1.229-.381-.478 0-.858.103-1.141.308-.282.204-.424.472-.424.804a.92.92 0 00.249.658c.175.166.39.302.643.41.264.097.624.209 1.083.336.575.156 1.043.312 1.404.468.36.146.668.37.921.673.263.302.4.697.41 1.184 0 .439-.122.834-.366 1.185-.244.351-.59.629-1.038.834-.439.195-.946.292-1.521.292zm5.71-9.448a.872.872 0 01-.643-.263.873.873 0 01-.264-.644c0-.253.088-.468.264-.643a.874.874 0 01.643-.263.81.81 0 01.614.263c.176.175.264.39.264.644a.873.873 0 01-.264.643.807.807 0 01-.614.263zm.644 1.302v8.014h-1.331v-8.014h1.331zm1.99 3.978c0-.819.166-1.536.497-2.15a3.616 3.616 0 011.36-1.448 3.794 3.794 0 011.945-.512c.702 0 1.312.151 1.829.454.516.302.901.682 1.155 1.14v-1.462h1.345v8.014h-1.345v-1.491c-.263.468-.658.858-1.185 1.17-.516.302-1.121.453-1.813.453a3.636 3.636 0 01-1.931-.526 3.698 3.698 0 01-1.36-1.478c-.331-.633-.497-1.355-.497-2.164zm6.786.015c0-.605-.122-1.131-.366-1.58a2.517 2.517 0 00-.994-1.024 2.617 2.617 0 00-1.36-.365c-.498 0-.951.117-1.36.351a2.54 2.54 0 00-.98 1.023c-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.609.243.448.57.794.98 1.038.409.234.862.351 1.36.351.497 0 .95-.117 1.36-.351.419-.244.751-.59.994-1.038.244-.459.366-.99.366-1.594zm4.53-5.295a.872.872 0 01-.892-.906.874.874 0 01.892-.907c.254 0 .464.088.629.263.176.175.264.39.264.644a.873.873 0 01-.264.643.824.824 0 01-.629.263zm.659 11.057c0 .712-.181 1.233-.542 1.565-.36.331-.887.497-1.579.497h-.775v-1.126h.556c.37 0 .628-.073.775-.22.156-.146.234-.394.234-.745v-9.726h1.331v9.755zM24.406 126.725h3.934v1.096h-5.455v-1.096l3.89-5.836h-3.86v-1.082h5.396v1.082l-3.905 5.836zm9.785-7.064c.975 0 1.765.297 2.37.892.604.585.907 1.433.907 2.545v4.723H36.15v-4.533c0-.8-.2-1.409-.6-1.828-.4-.429-.945-.644-1.637-.644-.702 0-1.263.219-1.682.658-.41.439-.614 1.078-.614 1.916v4.431h-1.331v-8.014h1.33v1.141a2.65 2.65 0 011.068-.951c.458-.224.96-.336 1.506-.336zm5.173 4.124c0-.819.165-1.536.497-2.15a3.611 3.611 0 011.36-1.448 3.792 3.792 0 011.945-.512c.702 0 1.312.151 1.828.454.517.302.902.682 1.156 1.14v-1.462h1.345v8.014H46.15v-1.491c-.264.468-.658.858-1.185 1.17-.517.302-1.121.453-1.814.453a3.633 3.633 0 01-1.93-.526 3.694 3.694 0 01-1.36-1.478c-.332-.633-.497-1.355-.497-2.164zm6.786.015c0-.605-.122-1.131-.366-1.58a2.52 2.52 0 00-.995-1.024 2.616 2.616 0 00-1.36-.365c-.497 0-.95.117-1.36.351-.41.234-.736.575-.98 1.023-.243.449-.365.975-.365 1.58 0 .614.122 1.15.365 1.609.244.448.57.794.98 1.038.41.234.863.351 1.36.351.498 0 .951-.117 1.36-.351.42-.244.751-.59.995-1.038.244-.459.366-.99.366-1.594zm3.316 0c0-.829.166-1.551.498-2.165a3.58 3.58 0 011.374-1.448c.595-.341 1.273-.512 2.033-.512.985 0 1.794.239 2.428.717.643.478 1.068 1.141 1.272 1.989h-1.433a2.041 2.041 0 00-.804-1.155c-.39-.283-.878-.425-1.463-.425-.76 0-1.375.264-1.843.79-.468.517-.702 1.253-.702 2.209 0 .965.234 1.711.702 2.237.468.527 1.083.79 1.843.79.585 0 1.073-.137 1.463-.41.39-.273.658-.663.804-1.17h1.433c-.214.819-.643 1.478-1.287 1.975-.643.487-1.448.731-2.413.731-.76 0-1.438-.171-2.033-.512a3.58 3.58 0 01-1.374-1.448c-.332-.624-.498-1.355-.498-2.193zm10.595 2.925h3.934v1.096H58.54v-1.096l3.89-5.836h-3.86v-1.082h5.396v1.082l-3.905 5.836zm9.785-7.064c.975 0 1.765.297 2.37.892.604.585.906 1.433.906 2.545v4.723h-1.316v-4.533c0-.8-.2-1.409-.6-1.828-.4-.429-.945-.644-1.638-.644-.702 0-1.262.219-1.681.658-.41.439-.615 1.078-.615 1.916v4.431h-1.33v-8.014h1.33v1.141c.263-.41.62-.727 1.068-.951.458-.224.96-.336 1.506-.336zm6.357-1.156a.873.873 0 01-.644-.263.874.874 0 01-.263-.643c0-.254.088-.468.263-.644a.877.877 0 01.644-.263c.244 0 .448.088.614.263.176.176.264.39.264.644a.874.874 0 01-.264.643.81.81 0 01-.614.263zm.644 1.302v8.014h-1.331v-8.014h1.33zm9.8 3.7c0 .254-.015.522-.044.804h-6.406c.049.79.317 1.409.804 1.858.498.439 1.097.658 1.8.658.575 0 1.052-.132 1.433-.395.39-.273.663-.634.819-1.082h1.433a3.478 3.478 0 01-1.287 1.886c-.644.478-1.443.717-2.399.717-.76 0-1.443-.171-2.047-.512a3.65 3.65 0 01-1.404-1.448c-.342-.633-.512-1.365-.512-2.193 0-.829.166-1.556.497-2.18a3.458 3.458 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.76 0 1.434.166 2.019.498a3.377 3.377 0 011.345 1.374c.322.576.483 1.229.483 1.96zm-1.375-.278c0-.507-.112-.941-.337-1.301a2.114 2.114 0 00-.92-.834 2.747 2.747 0 00-1.273-.293c-.673 0-1.248.215-1.726.644-.468.429-.736 1.024-.804 1.784h5.06zm8.8-6.23v10.822h-1.33v-10.822h1.33zm9.8 6.508c0 .254-.014.522-.044.804h-6.406c.05.79.317 1.409.805 1.858.497.439 1.097.658 1.799.658.575 0 1.053-.132 1.433-.395.39-.273.663-.634.819-1.082h1.433a3.473 3.473 0 01-1.287 1.886c-.643.478-1.443.717-2.398.717-.76 0-1.443-.171-2.048-.512a3.648 3.648 0 01-1.404-1.448c-.341-.633-.512-1.365-.512-2.193 0-.829.166-1.556.498-2.18a3.459 3.459 0 011.389-1.433c.605-.341 1.297-.512 2.077-.512.76 0 1.433.166 2.018.498a3.378 3.378 0 011.346 1.374c.321.576.482 1.229.482 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.301a2.11 2.11 0 00-.921-.834 2.752 2.752 0 00-1.273-.293c-.672 0-1.248.215-1.725.644-.469.429-.737 1.024-.805 1.784h5.06zm4.682-1.945c.263-.458.653-.838 1.17-1.141.527-.312 1.136-.468 1.828-.468.712 0 1.355.171 1.931.512a3.575 3.575 0 011.374 1.448c.332.614.498 1.331.498 2.15 0 .809-.166 1.531-.498 2.164a3.655 3.655 0 01-3.305 2.004c-.682 0-1.287-.151-1.813-.453-.517-.312-.912-.697-1.185-1.156v5.28h-1.331v-11.817h1.331v1.477zm5.441 2.501c0-.605-.122-1.131-.366-1.58a2.516 2.516 0 00-.995-1.023 2.689 2.689 0 00-1.36-.351c-.487 0-.941.122-1.36.365-.409.234-.741.58-.994 1.039-.244.448-.366.97-.366 1.565 0 .604.122 1.135.366 1.594.253.448.585.794.994 1.038.419.234.873.351 1.36.351.498 0 .951-.117 1.36-.351.42-.244.751-.59.995-1.038.244-.459.366-.995.366-1.609zm4.018-5.28a.872.872 0 01-.643-.263.872.872 0 01-.263-.643c0-.254.087-.468.263-.644a.876.876 0 01.643-.263c.244 0 .449.088.615.263.175.176.263.39.263.644a.876.876 0 01-.263.643.81.81 0 01-.615.263zm.644 1.302v8.014h-1.331v-8.014h1.331zm9.8 3.7c0 .254-.015.522-.044.804h-6.406c.049.79.317 1.409.805 1.858.497.439 1.097.658 1.799.658.575 0 1.053-.132 1.433-.395.39-.273.663-.634.819-1.082h1.433a3.473 3.473 0 01-1.287 1.886c-.643.478-1.443.717-2.398.717-.761 0-1.443-.171-2.048-.512a3.645 3.645 0 01-1.404-1.448c-.341-.633-.512-1.365-.512-2.193 0-.829.166-1.556.497-2.18a3.462 3.462 0 011.39-1.433c.604-.341 1.297-.512 2.077-.512.76 0 1.433.166 2.018.498a3.376 3.376 0 011.345 1.374c.322.576.483 1.229.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.301a2.113 2.113 0 00-.922-.834 2.745 2.745 0 00-1.272-.293c-.673 0-1.248.215-1.726.644-.468.429-.736 1.024-.804 1.784h5.06zm4.068-4.724a.874.874 0 01-.893-.906c0-.254.083-.468.249-.644a.878.878 0 01.644-.263c.253 0 .463.088.628.263.176.176.264.39.264.644a.873.873 0 01-.264.643.824.824 0 01-.628.263zm.658 11.057c0 .712-.181 1.233-.541 1.565-.361.331-.888.497-1.58.497h-.775v-1.126h.556c.37 0 .629-.073.775-.22.156-.146.234-.394.234-.745v-9.726h1.331v9.755zm3.847-3.583l-1.638 3.934h-.892l1.067-3.934h1.463zm5.365-2.194c0-.819.166-1.536.497-2.15a3.616 3.616 0 011.36-1.448 3.822 3.822 0 011.96-.512 3.58 3.58 0 011.74.439c.537.283.946.658 1.229 1.126v-4.241h1.345v10.822h-1.345v-1.506c-.263.478-.653.873-1.17 1.185-.517.302-1.121.453-1.814.453a3.71 3.71 0 01-1.945-.526 3.698 3.698 0 01-1.36-1.478c-.331-.633-.497-1.355-.497-2.164zm6.786.015c0-.605-.122-1.131-.366-1.58a2.517 2.517 0 00-.994-1.024 2.617 2.617 0 00-1.36-.365c-.498 0-.951.117-1.36.351a2.54 2.54 0 00-.98 1.023c-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.609.243.448.57.794.98 1.038.409.234.862.351 1.36.351.497 0 .95-.117 1.36-.351.419-.244.751-.59.994-1.038.244-.459.366-.99.366-1.594zm4.808 2.925h3.934v1.096h-5.455v-1.096l3.891-5.836h-3.861v-1.082h5.396v1.082l-3.905 5.836zm6.568-8.22a.872.872 0 01-.643-.263.873.873 0 01-.264-.643c0-.254.088-.468.264-.644a.876.876 0 01.643-.263.81.81 0 01.614.263c.176.176.264.39.264.644a.873.873 0 01-.264.643.807.807 0 01-.614.263zm.644 1.302v8.014h-1.331v-8.014h1.331zm9.8 3.7c0 .254-.015.522-.044.804h-6.406c.049.79.317 1.409.804 1.858.498.439 1.097.658 1.799.658.576 0 1.053-.132 1.434-.395.39-.273.663-.634.819-1.082h1.433a3.483 3.483 0 01-1.287 1.886c-.644.478-1.443.717-2.399.717-.76 0-1.443-.171-2.047-.512a3.645 3.645 0 01-1.404-1.448c-.341-.633-.512-1.365-.512-2.193 0-.829.166-1.556.497-2.18a3.462 3.462 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.498a3.376 3.376 0 011.345 1.374c.322.576.483 1.229.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.301a2.119 2.119 0 00-.922-.834 2.745 2.745 0 00-1.272-.293c-.673 0-1.248.215-1.726.644-.468.429-.736 1.024-.804 1.784h5.06zm7.826 4.592l-3.144-3.539v3.539h-1.331v-10.822h1.331v6.362l3.086-3.554h1.857l-3.773 3.993 3.788 4.021h-1.814zm10.379-8.014v8.014h-1.331v-1.184a2.64 2.64 0 01-1.068.965 3.291 3.291 0 01-1.492.336c-.624 0-1.184-.126-1.681-.38a2.9 2.9 0 01-1.185-1.17c-.283-.517-.424-1.145-.424-1.886v-4.695h1.316v4.519c0 .79.2 1.399.6 1.828.399.419.945.629 1.638.629.711 0 1.272-.219 1.682-.658.409-.439.614-1.077.614-1.916v-4.402h1.331zm3.183-1.302a.874.874 0 01-.644-.263.904.904 0 01-.248-.643c0-.254.083-.468.248-.644a.878.878 0 01.644-.263.83.83 0 01.629.263c.175.176.263.39.263.644a.876.876 0 01-.263.643.827.827 0 01-.629.263zm.658 11.057c0 .712-.18 1.233-.541 1.565-.361.331-.887.497-1.58.497h-.775v-1.126h.556c.37 0 .629-.073.775-.22.156-.146.234-.394.234-.745v-9.726h1.331v9.755zm9.785-6.055c0 .254-.015.522-.044.804h-6.406c.049.79.317 1.409.804 1.858.498.439 1.097.658 1.799.658.576 0 1.053-.132 1.434-.395.39-.273.663-.634.819-1.082h1.433a3.478 3.478 0 01-.907 1.55c-.429.429-.97.731-1.623.907l-.41.205c-.585.282-.877.624-.877 1.023 0 .225.078.395.234.512.156.127.365.19.629.19.273 0 .589-.063.95-.19v.878c-.39.136-.765.204-1.126.204-.497 0-.921-.121-1.272-.365-.342-.234-.512-.6-.512-1.097 0-.478.209-.897.629-1.258a3.945 3.945 0 01-1.755-.658 3.67 3.67 0 01-1.185-1.419c-.283-.594-.424-1.272-.424-2.032 0-.829.166-1.556.497-2.18a3.462 3.462 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.498a3.376 3.376 0 011.345 1.374c.322.576.483 1.229.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.301a2.119 2.119 0 00-.922-.834 2.745 2.745 0 00-1.272-.293c-.673 0-1.248.215-1.726.644-.468.429-.736 1.024-.804 1.784h5.06zm5.077-5.601l-.161 7.312h-1.112l-.161-7.312h1.434zm-.659 10.281a.876.876 0 01-.643-.263.874.874 0 01-.263-.644c0-.253.087-.468.263-.643a.872.872 0 01.643-.263.81.81 0 01.615.263c.175.175.263.39.263.643a.878.878 0 01-.263.644.814.814 0 01-.615.263z"
        fill="#2F3C7E"
      />
      <path
        d="M319.995 105.48l-7.288 4.164a2.786 2.786 0 00-1.404 2.419v1.169h-4.875V96.518h4.875v1.169c0 1 .536 1.923 1.404 2.419l7.288 4.164a.697.697 0 010 1.21z"
        fill="#EBF1FF"
      />
      <path
        d="M58.165 34.73l7.288 4.164a2.786 2.786 0 011.404 2.42v1.168h4.875V25.768h-4.875v1.169c0 1-.536 1.923-1.404 2.419l-7.288 4.164a.696.696 0 000 1.21z"
        fill="#B9D9F8"
      />
      <rect
        x={66.857}
        y={8.357}
        width={306.429}
        height={51.429}
        rx={11.143}
        fill="#B9D9F8"
      />
      <path
        d="M84.3 28.806c1.111 0 2.072.21 2.88.63.82.409 1.444.999 1.873 1.769.439.77.658 1.677.658 2.72 0 1.043-.22 1.95-.658 2.72-.43.76-1.053 1.346-1.872 1.755-.81.4-1.77.6-2.881.6h-3.174V28.806H84.3zm0 9.097c1.316 0 2.32-.346 3.013-1.038.692-.702 1.038-1.682 1.038-2.94 0-1.267-.351-2.257-1.053-2.969-.692-.712-1.692-1.067-2.998-1.067h-1.843v8.014H84.3zm8.38 0h3.934V39H91.16v-1.097l3.89-5.835h-3.86v-1.082h5.396v1.082l-3.905 5.835zm6.568-8.22a.875.875 0 01-.643-.262.875.875 0 01-.264-.644c0-.253.088-.468.264-.643a.875.875 0 01.643-.264c.244 0 .449.088.614.264.176.175.264.39.264.643a.875.875 0 01-.264.644.811.811 0 01-.614.263zm.644 1.302V39H98.56v-8.015h1.33zm9.8 3.7c0 .254-.015.522-.044.805h-6.406c.049.79.317 1.409.804 1.857.498.44 1.097.658 1.799.658.576 0 1.053-.131 1.434-.394.39-.273.663-.634.819-1.083h1.433c-.215.77-.644 1.4-1.287 1.887-.644.478-1.443.717-2.399.717-.76 0-1.443-.171-2.047-.512a3.646 3.646 0 01-1.404-1.448c-.341-.634-.512-1.365-.512-2.194s.166-1.555.497-2.179a3.46 3.46 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.497a3.38 3.38 0 011.345 1.375c.322.575.483 1.228.483 1.96zm-1.375-.277c0-.507-.112-.941-.336-1.302a2.122 2.122 0 00-.922-.834 2.745 2.745 0 00-1.272-.292c-.673 0-1.248.214-1.726.643-.468.43-.736 1.024-.804 1.785h5.06zm7.256-3.569c.975 0 1.764.298 2.369.892.604.585.907 1.434.907 2.545V39h-1.317v-4.534c0-.8-.199-1.409-.599-1.828-.4-.429-.946-.643-1.638-.643-.702 0-1.263.219-1.682.658-.41.439-.614 1.077-.614 1.916V39h-1.331v-8.015h1.331v1.141c.263-.41.619-.726 1.067-.95a3.386 3.386 0 011.507-.337zm9.29 4.125c0-.82.166-1.536.497-2.15a3.613 3.613 0 011.361-1.448 3.816 3.816 0 011.959-.512c.624 0 1.204.146 1.741.439.536.282.945.658 1.228 1.126v-4.241h1.346V39h-1.346v-1.506c-.263.477-.653.872-1.17 1.184-.517.303-1.121.454-1.813.454-.712 0-1.36-.176-1.945-.527a3.693 3.693 0 01-1.361-1.477c-.331-.634-.497-1.355-.497-2.164zm6.786.014c0-.604-.122-1.13-.365-1.58a2.521 2.521 0 00-.995-1.023 2.608 2.608 0 00-1.36-.366c-.497 0-.951.117-1.36.351-.41.234-.736.575-.98 1.024-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.608.244.449.57.795.98 1.039.409.234.863.35 1.36.35.497 0 .951-.116 1.36-.35.419-.244.751-.59.995-1.039.243-.458.365-.99.365-1.594zm7.31 4.154c-.751 0-1.434-.171-2.048-.512a3.723 3.723 0 01-1.433-1.448c-.341-.634-.512-1.365-.512-2.194 0-.819.175-1.54.526-2.164a3.669 3.669 0 011.463-1.448c.614-.341 1.302-.512 2.062-.512.761 0 1.448.17 2.062.512.614.331 1.097.809 1.448 1.433.361.624.541 1.35.541 2.18 0 .828-.185 1.56-.556 2.193a3.76 3.76 0 01-1.477 1.448 4.254 4.254 0 01-2.076.512zm0-1.17a2.81 2.81 0 001.345-.337 2.51 2.51 0 001.009-1.009c.263-.448.395-.994.395-1.638 0-.643-.127-1.19-.38-1.638-.254-.448-.585-.78-.995-.994a2.725 2.725 0 00-1.331-.337c-.487 0-.936.112-1.345.337-.4.214-.722.546-.965.994-.244.449-.366.995-.366 1.638 0 .653.117 1.204.351 1.653.244.448.566.785.965 1.009.4.214.839.322 1.317.322zm7.409-5.485c.273-.477.673-.867 1.2-1.17.526-.302 1.126-.453 1.798-.453.722 0 1.37.17 1.946.512a3.617 3.617 0 011.36 1.448c.331.614.497 1.33.497 2.15 0 .809-.166 1.53-.497 2.164a3.663 3.663 0 01-3.306 2.004c-.692 0-1.301-.151-1.828-.454-.516-.302-.906-.687-1.17-1.155V39h-1.331V28.177h1.331v4.3zm5.441 2.487c0-.605-.122-1.131-.366-1.58a2.52 2.52 0 00-.994-1.024 2.694 2.694 0 00-1.36-.35c-.488 0-.941.121-1.361.365a2.62 2.62 0 00-.994 1.038c-.244.449-.366.97-.366 1.565 0 .605.122 1.136.366 1.594.253.449.585.795.994 1.039.42.234.873.35 1.361.35.497 0 .95-.116 1.36-.35.419-.244.75-.59.994-1.039.244-.458.366-.994.366-1.608zm4.662-2.677c.234-.458.565-.814.994-1.067.439-.254.971-.38 1.595-.38v1.374h-.351c-1.492 0-2.238.81-2.238 2.428V39h-1.331v-8.015h1.331v1.302zm11.247-1.302l-4.826 11.788h-1.375l1.58-3.86-3.232-7.927h1.477l2.515 6.493 2.486-6.494h1.375zm2.932 6.172l-1.638 3.934h-.892l1.068-3.934h1.462zm6.579-7.473a.874.874 0 01-.892-.907.874.874 0 01.892-.907c.254 0 .463.088.629.264.176.175.263.39.263.643a.873.873 0 01-.263.644.828.828 0 01-.629.263zm.658 11.056c0 .712-.18 1.234-.541 1.565-.361.332-.887.498-1.579.498h-.775v-1.127h.555c.371 0 .629-.073.775-.219.156-.146.234-.395.234-.746v-9.726h1.331v9.755zm1.975-5.776c0-.82.166-1.536.498-2.15a3.604 3.604 0 011.36-1.448 3.789 3.789 0 011.945-.512c.702 0 1.311.151 1.828.453.517.303.902.683 1.155 1.141v-1.463h1.346V39h-1.346v-1.492c-.263.468-.658.858-1.184 1.17-.517.303-1.122.454-1.814.454a3.63 3.63 0 01-1.93-.527 3.684 3.684 0 01-1.36-1.477c-.332-.634-.498-1.355-.498-2.164zm6.786.014c0-.604-.122-1.13-.365-1.58a2.521 2.521 0 00-.995-1.023 2.608 2.608 0 00-1.36-.366c-.497 0-.951.117-1.36.351-.41.234-.736.575-.98 1.024-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.608.244.449.57.795.98 1.039.409.234.863.35 1.36.35.497 0 .951-.116 1.36-.35.419-.244.751-.59.995-1.039.243-.458.365-.99.365-1.594zm8.29 4.022l-3.145-3.54V39h-1.331V28.177h1.331v6.362l3.086-3.554h1.857l-3.773 3.993L196.751 39h-1.813zm8.72-6.537c.263-.459.653-.839 1.17-1.141.526-.312 1.136-.468 1.828-.468.712 0 1.355.17 1.93.512a3.579 3.579 0 011.375 1.448c.332.614.497 1.33.497 2.15 0 .809-.165 1.53-.497 2.164a3.657 3.657 0 01-1.375 1.477 3.63 3.63 0 01-1.93.527c-.683 0-1.287-.151-1.814-.454-.516-.312-.911-.697-1.184-1.155v5.28h-1.331V30.986h1.331v1.477zm5.44 2.5c0-.604-.122-1.13-.365-1.579a2.522 2.522 0 00-.995-1.024 2.692 2.692 0 00-1.36-.35c-.488 0-.941.121-1.36.365-.41.234-.741.58-.995 1.038-.243.449-.365.97-.365 1.565 0 .605.122 1.136.365 1.594.254.449.585.795.995 1.039.419.234.872.35 1.36.35.497 0 .951-.116 1.36-.35.419-.244.751-.59.995-1.039.243-.458.365-.994.365-1.608zm4.662-2.676c.234-.458.566-.814.995-1.067.439-.254.97-.38 1.594-.38v1.374h-.351c-1.492 0-2.238.81-2.238 2.428V39h-1.33v-8.015h1.33v1.302zm5.339 5.616h3.934V39h-5.455v-1.097l3.89-5.835h-3.861v-1.082h5.397v1.082l-3.905 5.835zm13.193-3.217c0 .253-.015.521-.044.804h-6.406c.049.79.317 1.409.805 1.857.497.44 1.097.658 1.799.658.575 0 1.053-.131 1.433-.394.39-.273.663-.634.819-1.083h1.433c-.214.77-.643 1.4-1.287 1.887-.643.478-1.443.717-2.398.717-.761 0-1.443-.171-2.048-.512a3.646 3.646 0 01-1.404-1.448c-.341-.634-.512-1.365-.512-2.194s.166-1.555.498-2.179a3.451 3.451 0 011.389-1.433c.604-.341 1.297-.512 2.077-.512.76 0 1.433.166 2.018.497a3.38 3.38 0 011.345 1.375c.322.575.483 1.228.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.302a2.114 2.114 0 00-.921-.834 2.752 2.752 0 00-1.273-.292c-.673 0-1.248.214-1.726.643-.468.43-.736 1.024-.804 1.785h5.06zm4.682-1.93c.273-.479.673-.869 1.199-1.17.527-.303 1.126-.454 1.799-.454.722 0 1.37.17 1.945.512a3.604 3.604 0 011.36 1.448c.332.614.498 1.33.498 2.15 0 .809-.166 1.53-.498 2.164a3.654 3.654 0 01-1.374 1.477 3.636 3.636 0 01-1.931.527c-.692 0-1.301-.151-1.828-.454-.517-.302-.907-.687-1.17-1.155V39h-1.331V28.177h1.331v4.3zm5.441 2.486c0-.605-.122-1.131-.366-1.58a2.515 2.515 0 00-.995-1.024 2.689 2.689 0 00-1.36-.35 2.66 2.66 0 00-1.36.365 2.62 2.62 0 00-.994 1.038c-.244.449-.366.97-.366 1.565 0 .605.122 1.136.366 1.594.253.449.585.795.994 1.039.419.234.873.35 1.36.35.498 0 .951-.116 1.36-.35.42-.244.751-.59.995-1.039.244-.458.366-.994.366-1.608zm4.018-5.28a.874.874 0 01-.643-.263.874.874 0 01-.264-.644c0-.253.088-.468.264-.643a.874.874 0 01.643-.264.81.81 0 01.614.264c.176.175.264.39.264.643a.874.874 0 01-.264.644.81.81 0 01-.614.263zm.644 1.301V39h-1.331v-8.015h1.331zm9.8 3.7c0 .254-.015.522-.044.805h-6.406c.049.79.317 1.409.805 1.857.497.44 1.096.658 1.798.658.576 0 1.053-.131 1.434-.394.39-.273.663-.634.819-1.083h1.433c-.215.77-.644 1.4-1.287 1.887-.644.478-1.443.717-2.399.717-.76 0-1.443-.171-2.047-.512a3.646 3.646 0 01-1.404-1.448c-.341-.634-.512-1.365-.512-2.194s.166-1.555.497-2.179a3.46 3.46 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.497a3.38 3.38 0 011.345 1.375c.322.575.483 1.228.483 1.96zm-1.375-.277c0-.507-.112-.941-.336-1.302a2.122 2.122 0 00-.922-.834 2.745 2.745 0 00-1.272-.292c-.673 0-1.248.214-1.726.643-.468.43-.736 1.024-.804 1.785h5.06zm6.656-3.554c.692 0 1.297.151 1.814.453.526.303.916.683 1.17 1.141v-1.463h1.345v8.19c0 .732-.156 1.38-.468 1.946a3.31 3.31 0 01-1.345 1.345c-.576.322-1.248.483-2.019.483-1.053 0-1.93-.249-2.632-.746-.702-.497-1.116-1.175-1.243-2.033h1.316c.146.487.449.877.907 1.17.458.302 1.009.453 1.652.453.732 0 1.326-.229 1.785-.687.468-.458.702-1.102.702-1.93v-1.682c-.264.468-.654.858-1.17 1.17-.517.312-1.122.468-1.814.468-.712 0-1.36-.176-1.945-.527a3.69 3.69 0 01-1.36-1.477c-.332-.634-.497-1.355-.497-2.164 0-.82.165-1.536.497-2.15a3.61 3.61 0 011.36-1.448 3.789 3.789 0 011.945-.512zm2.984 4.124c0-.604-.122-1.13-.366-1.58a2.519 2.519 0 00-.994-1.023 2.611 2.611 0 00-1.361-.366c-.497 0-.95.117-1.36.351a2.552 2.552 0 00-.98 1.024c-.243.449-.365.975-.365 1.58 0 .614.122 1.15.365 1.608.244.449.571.795.98 1.039.41.234.863.35 1.36.35.498 0 .951-.116 1.361-.35.419-.244.75-.59.994-1.039.244-.458.366-.99.366-1.594zm3.316-.014c0-.82.166-1.536.498-2.15a3.604 3.604 0 011.36-1.448 3.789 3.789 0 011.945-.512c.702 0 1.311.151 1.828.453.517.303.902.683 1.155 1.141v-1.463h1.346V39h-1.346v-1.492c-.263.468-.658.858-1.184 1.17-.517.303-1.122.454-1.814.454a3.63 3.63 0 01-1.93-.527 3.684 3.684 0 01-1.36-1.477c-.332-.634-.498-1.355-.498-2.164zm6.786.014c0-.604-.122-1.13-.365-1.58a2.521 2.521 0 00-.995-1.023 2.608 2.608 0 00-1.36-.366c-.497 0-.951.117-1.36.351-.41.234-.736.575-.98 1.024-.244.449-.366.975-.366 1.58 0 .614.122 1.15.366 1.608.244.449.57.795.98 1.039.409.234.863.35 1.36.35.497 0 .951-.116 1.36-.35.419-.244.751-.59.995-1.039.243-.458.365-.99.365-1.594zm9.264-6.8V39h-1.331V28.177h1.331zm9.8 6.508c0 .253-.015.521-.044.804h-6.406c.049.79.317 1.409.804 1.857.498.44 1.097.658 1.799.658.576 0 1.053-.131 1.434-.394.39-.273.663-.634.819-1.083h1.433c-.215.77-.644 1.4-1.287 1.887-.644.478-1.443.717-2.399.717-.76 0-1.443-.171-2.047-.512a3.646 3.646 0 01-1.404-1.448c-.341-.634-.512-1.365-.512-2.194s.166-1.555.497-2.179a3.46 3.46 0 011.39-1.433c.604-.341 1.296-.512 2.076-.512.761 0 1.434.166 2.019.497a3.38 3.38 0 011.345 1.375c.322.575.483 1.228.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.302a2.122 2.122 0 00-.922-.834 2.745 2.745 0 00-1.272-.292c-.673 0-1.248.214-1.726.643-.468.43-.736 1.024-.804 1.785h5.06zm2.854.57c0-.829.165-1.55.497-2.164a3.579 3.579 0 011.375-1.448c.594-.341 1.272-.512 2.032-.512.985 0 1.794.239 2.428.716.644.478 1.068 1.141 1.273 1.99h-1.434a2.042 2.042 0 00-.804-1.156c-.39-.283-.878-.424-1.463-.424-.76 0-1.374.263-1.842.79-.468.516-.702 1.253-.702 2.208 0 .965.234 1.711.702 2.238.468.526 1.082.79 1.842.79.585 0 1.073-.137 1.463-.41.39-.273.658-.663.804-1.17h1.434c-.215.819-.644 1.477-1.287 1.974-.644.488-1.448.732-2.414.732-.76 0-1.438-.171-2.032-.512a3.578 3.578 0 01-1.375-1.448c-.332-.624-.497-1.355-.497-2.194zm10.594 2.925h3.934V39h-5.455v-1.097l3.89-5.835h-3.861v-1.082h5.397v1.082l-3.905 5.835zm13.193-3.217c0 .253-.015.521-.044.804h-6.406c.049.79.317 1.409.805 1.857.497.44 1.097.658 1.799.658.575 0 1.053-.131 1.433-.394.39-.273.663-.634.819-1.083h1.433c-.214.77-.643 1.4-1.287 1.887-.643.478-1.443.717-2.398.717-.761 0-1.443-.171-2.048-.512a3.646 3.646 0 01-1.404-1.448c-.341-.634-.512-1.365-.512-2.194s.166-1.555.498-2.179a3.451 3.451 0 011.389-1.433c.604-.341 1.297-.512 2.077-.512.76 0 1.433.166 2.018.497a3.38 3.38 0 011.345 1.375c.322.575.483 1.228.483 1.96zm-1.375-.278c0-.507-.112-.941-.336-1.302a2.114 2.114 0 00-.921-.834 2.752 2.752 0 00-1.273-.292c-.673 0-1.248.214-1.726.643-.468.43-.736 1.024-.804 1.785h5.06zm7.256-3.569c.975 0 1.765.298 2.369.892.605.585.907 1.434.907 2.545V39h-1.316v-4.534c0-.8-.2-1.409-.6-1.828-.4-.429-.946-.643-1.638-.643-.702 0-1.262.219-1.682.658-.409.439-.614 1.077-.614 1.916V39h-1.331v-8.015h1.331v1.141a2.65 2.65 0 011.068-.95c.458-.225.96-.337 1.506-.337zm6.357-1.155a.877.877 0 01-.644-.263.877.877 0 01-.263-.644c0-.253.088-.468.263-.643a.876.876 0 01.644-.264.81.81 0 01.614.264c.176.175.263.39.263.643a.873.873 0 01-.263.644.81.81 0 01-.614.263zm.643 1.301V39h-1.331v-8.015h1.331zm9.8 3.7c0 .254-.014.522-.043.805h-6.406c.049.79.317 1.409.804 1.857.497.44 1.097.658 1.799.658.575 0 1.053-.131 1.433-.394.39-.273.663-.634.819-1.083h1.434c-.215.77-.644 1.4-1.287 1.887-.644.478-1.443.717-2.399.717-.76 0-1.443-.171-2.047-.512a3.646 3.646 0 01-1.404-1.448c-.342-.634-.512-1.365-.512-2.194s.165-1.555.497-2.179a3.457 3.457 0 011.389-1.433c.605-.341 1.297-.512 2.077-.512.761 0 1.433.166 2.018.497.585.332 1.034.79 1.346 1.375.322.575.482 1.228.482 1.96zm-1.374-.277c0-.507-.112-.941-.337-1.302a2.114 2.114 0 00-.921-.834 2.745 2.745 0 00-1.272-.292c-.673 0-1.248.214-1.726.643-.468.43-.736 1.024-.805 1.785h5.061zm5.954-5.733c.965 0 1.745.273 2.34.819.595.546.892 1.277.892 2.194 0 1.023-.317 1.784-.951 2.281-.633.487-1.491.731-2.574.731l-.044 1.39h-1.155l-.058-2.311h.424c.965 0 1.721-.146 2.267-.439.546-.292.819-.843.819-1.653 0-.585-.176-1.048-.527-1.389-.351-.341-.824-.512-1.419-.512-.604 0-1.082.166-1.433.497-.341.322-.512.766-.512 1.331h-1.257c0-.585.131-1.097.394-1.535a2.664 2.664 0 011.112-1.039c.487-.243 1.048-.365 1.682-.365zm-.922 10.413a.874.874 0 01-.643-.264.873.873 0 01-.263-.643c0-.253.087-.468.263-.643a.874.874 0 01.643-.264c.244 0 .449.088.615.264.175.175.263.39.263.643a.877.877 0 01-.263.644.813.813 0 01-.615.263z"
        fill="#2F3C7E"
      />
    </svg>
  );
};