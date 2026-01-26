export default function ItemPlaceHolder() {
  return (
    <div className="hidden xl:flex grow flex-col items-center justify-center h-full bg-muted/5 gap-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground/80 whitespace-nowrap">
          아이템을 선택해주세요
        </h2>
        <p className="text-muted-foreground whitespace-nowrap">
          오른쪽 목록에서 아이템을 클릭하면
          <br />
          상세 시세와 거래 내역이 이곳에 표시됩니다.
        </p>
      </div>
    </div>
  );
}
